import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web Developer", "Frontend Developer", "Coder"],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, []);

  return <span ref={typedRef} className="role font-bold text-blue-600"></span>;
};

export default TypedText;
