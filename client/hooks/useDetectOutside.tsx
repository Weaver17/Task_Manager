import React, { useEffect } from "react";

interface DetectOutsideProps {
  ref: React.RefObject<HTMLFormElement>;
  callback: () => void;
}

function useDetectOutside({ ref, callback }: DetectOutsideProps) {
  useEffect(() => {
    // handler to detect click outside of modal
    const handleOutsideClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    // event listener
    document.addEventListener("mousedown", handleOutsideClick);

    // cleanup
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, callback]);

  return ref;
}

export default useDetectOutside;
