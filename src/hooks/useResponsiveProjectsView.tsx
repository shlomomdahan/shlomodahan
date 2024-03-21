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

  useEffect(() => {
    const calculateVisibleProjects = (): number =>
      window.innerWidth > breakpoint ? initialLarge : initialSmall;

    setVisibleProjects(calculateVisibleProjects());

    const handleResize = () => {
      setVisibleProjects(calculateVisibleProjects());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, initialLarge, initialSmall]);

  return [visibleProjects, setVisibleProjects];
};

export default useResponsiveShowMore;
