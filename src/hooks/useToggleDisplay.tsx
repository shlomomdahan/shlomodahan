import { useState, useEffect } from "react";

const breakpoints = [
  { width: 2400, columns: 4 }, // 3.5xl:grid-cols-4
  { width: 1536, columns: 3 }, // lg:grid-cols-3
  { width: 768, columns: 2 }, // md:grid-cols-2
  { width: 0, columns: 1 }, // Default to 1 column
];

interface UseToggleDisplayProps {
  dataLength: number;
}

interface UseToggleDisplayReturn {
  visibleItems: number;
  showMore: () => void;
  showLess: () => void;
  isExpanded: boolean;
}

export const useToggleDisplay = ({
  dataLength,
}: UseToggleDisplayProps): UseToggleDisplayReturn => {
  // Initially set visibleItems to 0 or a default value that makes sense for SSR/SSG
  const [visibleItems, setVisibleItems] = useState<number>(0);

  // Define calculateColumns as a function that can safely run on the client side
  const calculateColumns = () => {
    if (typeof window !== "undefined") {
      // Check if window is defined
      const screenWidth = window.innerWidth;
      const matchedBreakpoint = breakpoints.find(
        (breakpoint) => screenWidth >= breakpoint.width
      );
      return matchedBreakpoint ? matchedBreakpoint.columns : 1;
    }
    return 0; // Return a default value for SSR/SSG
  };

  useEffect(() => {
    setVisibleItems(calculateColumns()); // Initialize visible items on client side

    const handleResize = () => {
      setVisibleItems(calculateColumns());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  const showMore = () => setVisibleItems(dataLength);
  const showLess = () => setVisibleItems(calculateColumns());
  const isExpanded = visibleItems >= dataLength;

  return { visibleItems, showMore, showLess, isExpanded };
};
