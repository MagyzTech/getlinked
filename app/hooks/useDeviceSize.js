import React from "react";

const useDeviceSize = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
      } else if (window.innerWidth < 1024) {
        setIsMobile(false);
        setIsTablet(true);
        setIsDesktop(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
      }
    };

    handleResize(); // Run on initial render

    window.addEventListener("resize", handleResize); // Add event listener

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useDeviceSize;
