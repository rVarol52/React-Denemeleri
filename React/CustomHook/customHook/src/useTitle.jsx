import React from "react";
import { useEffect } from "react";

function useTitle(a) {
  useEffect(() => {
    document.title = `sayı ${a}`;
  }, [a]);
}

export default useTitle;
