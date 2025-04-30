"use client";

import React, { useState, useEffect } from "react";

interface CommandOutput {
  text: string;
  isCommand: boolean;
}

interface CommandLineProps {
  commands: string[];
  outputs?: string[];
  prompt?: string;
  className?: string;
  autoType?: boolean;
  typeSpeed?: number;
}

const CommandLine: React.FC<CommandLineProps> = ({
  commands,
  outputs = [],
  prompt = "$",
  className = "",
  autoType = false,
  typeSpeed = 50,
}) => {
  const [currentLines, setCurrentLines] = useState<CommandOutput[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const formatOutput = (text: string) => {
    return text.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  useEffect(() => {
    if (!autoType) {
      const lines: CommandOutput[] = [];
      commands.forEach((cmd, index) => {
        lines.push({ text: cmd, isCommand: true });
        if (outputs[index]) {
          lines.push({ text: outputs[index], isCommand: false });
        }
      });
      setCurrentLines(lines);
    }
  }, [commands, outputs, autoType]);

  useEffect(() => {
    if (!autoType) return;

    if (currentCommandIndex < commands.length) {
      const typingTimer = setTimeout(() => {
        if (currentCharIndex < commands[currentCommandIndex].length) {
          setCurrentLines((prevLines) => {
            const updatedLines = [...prevLines];
            const currentCommand = commands[currentCommandIndex].substring(
              0,
              currentCharIndex + 1
            );

            if (updatedLines.length <= currentCommandIndex) {
              updatedLines.push({ text: currentCommand, isCommand: true });
            } else {
              updatedLines[currentCommandIndex] = {
                text: currentCommand,
                isCommand: true,
              };
            }

            return updatedLines;
          });
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          if (outputs[currentCommandIndex]) {
            setCurrentLines((prevLines) => [
              ...prevLines,
              { text: outputs[currentCommandIndex], isCommand: false },
            ]);
          }

          setCurrentCommandIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }
      }, typeSpeed);

      return () => clearTimeout(typingTimer);
    }
  }, [
    currentCommandIndex,
    currentCharIndex,
    commands,
    outputs,
    autoType,
    typeSpeed,
  ]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div
      className={`bg-gray-900 rounded-md overflow-hidden shadow-lg ${className}`}
    >
      <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-sm mx-auto">Terminal</div>
      </div>
      <div className="p-4 font-mono text-sm overflow-auto max-h-96">
        {autoType ? (
          <>
            {currentLines.map((line, index) => (
              <div
                key={index}
                className={`mb-2 ${line.isCommand ? "" : "pl-4"}`}
              >
                {line.isCommand && (
                  <span className="text-green-400 mr-2">{prompt}</span>
                )}
                <span
                  className={line.isCommand ? "text-gray-100" : "text-gray-300"}
                >
                  {line.isCommand ? line.text : formatOutput(line.text)}
                </span>
                {index === currentLines.length - 1 &&
                  line.isCommand &&
                  showCursor && (
                    <span className="text-gray-100 animate-pulse">▋</span>
                  )}
              </div>
            ))}
          </>
        ) : (
          <>
            {currentLines.map((line, index) => (
              <div
                key={index}
                className={`mb-2 ${line.isCommand ? "" : "pl-4"}`}
              >
                {line.isCommand && (
                  <span className="text-green-400 mr-2">{prompt}</span>
                )}
                <span
                  className={line.isCommand ? "text-gray-100" : "text-gray-300"}
                >
                  {line.isCommand ? line.text : formatOutput(line.text)}
                </span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CommandLine;
