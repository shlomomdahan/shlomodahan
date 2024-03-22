import { useState, useEffect } from "react";

interface UseResponsiveProjectsParams {
  breakpoint?: number;
  initialLarge?: number;
  initialSmall?: number;
}

const useResponsiveShowMore = ({
  breakpoint = 768,
  initialLarge = 3,
  initialSmall = 1,
}: UseResponsiveProjectsParams = {}): [
  number,
  React.Dispatch<React.SetStateAction<number>>
] => {
  const [visibleProjects, setVisibleProjects] = useState<number>(initialSmall);
  const [userHasInteracted, setUserHasInteracted] = useState<boolean>(false);

  useEffect(() => {
    const calculateVisibleProjects = (): number =>
      window.innerWidth > breakpoint ? initialLarge : initialSmall;

    // Only automatically adjust if the user hasn't interacted yet
    if (!userHasInteracted) {
      setVisibleProjects(calculateVisibleProjects());
    }

    const handleResize = () => {
      // Same check here to avoid resetting on resize if the user has interacted
      if (!userHasInteracted) {
        setVisibleProjects(calculateVisibleProjects());
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, initialLarge, initialSmall, userHasInteracted]);

  // Wrap setVisibleProjects to set userHasInteracted when the function is called
  const setVisibleProjectsWrapper = (value: React.SetStateAction<number>) => {
    setUserHasInteracted(true); // Indicates the user has manually changed the visible items
    setVisibleProjects(value);
  };

  return [visibleProjects, setVisibleProjectsWrapper];
};

export default useResponsiveShowMore;
