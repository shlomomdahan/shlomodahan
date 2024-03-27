import React from "react";

interface ToggleButtonProps {
  onClick: () => void;
  isExpanded: boolean;
  className?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onClick,
  isExpanded,
  className = "",
}) => {
  const buttonText = isExpanded ? "Show Less ⬆️" : "Show More ⬇️";

  return (
    <button
      onClick={onClick}
      className={`text-white bg-white bg-opacity-30 shadow-xl px-3 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer ${className}`}
    >
      {buttonText}
    </button>
  );
};

export default ToggleButton;
