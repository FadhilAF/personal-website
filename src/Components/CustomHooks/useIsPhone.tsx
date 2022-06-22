import { useLayoutEffect, useState } from "react";

function useIfPhone() {
  const [isPhone, setIsPhone] = useState(false);
  useLayoutEffect(() => {
    function updateSize() {
      setIsPhone(window.innerWidth <= 540 ? true : false);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return isPhone;
}

export default useIfPhone;
