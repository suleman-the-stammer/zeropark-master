import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Aos from "aos";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
        Aos.init()
      Aos.refresh();
    }, 100);  

  }, [pathname]);
}

export default useScrollToTop;
