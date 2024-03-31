import { useState, useEffect } from "react";

interface UseToggleDisplayProps {
  breakpoint: number;
  initialLarge: number;
  initialSmall: number;
  dataLength: number;
}

interface UseToggleDisplayReturn {
  visibleItems: number;
  showMore: () => void;
  showLess: () => void;
  isExpanded: boolean;
}

export const useToggleDisplay = ({
  breakpoint,
  initialLarge,
  initialSmall,
  dataLength,
}: UseToggleDisplayProps): UseToggleDisplayReturn => {
  const [visibleItems, setVisibleItems] = useState<number>(initialSmall);

  useEffect(() => {
    const handleResize = () => {
      const newSize =
        window.innerWidth > breakpoint ? initialLarge : initialSmall;
      setVisibleItems(newSize);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, initialLarge, initialSmall]);

  const showMore = () => setVisibleItems(dataLength);
  const showLess = () =>
    setVisibleItems(
      window.innerWidth > breakpoint ? initialLarge : initialSmall
    );
  const isExpanded = visibleItems === dataLength;

  return { visibleItems, showMore, showLess, isExpanded };
};
