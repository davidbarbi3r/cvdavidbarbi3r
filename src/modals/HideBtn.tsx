import { styled } from "@stitches/react";
import React, { useState } from "react";
import { colorTheme } from "../styles/colorTheme";

export const HideBtn = (props: any) => {
  const [hide, setHide] = useState(true);

  const toggleHide = () => {
    setHide((prev) => !prev);
  };

  const StyledHideBtn = styled("button", {
    display: "inline",
    border: "none",
    background: "none",
    color: "inherit",
    fontSize: "inherit",
    cursor: "pointer",
    textAlign: "left",
    "&:hover": {
      fontWeight: "bold"
    }
  });

  return (
    <StyledHideBtn onClick={() => toggleHide()}>
      {hide ? "[ ... ]" :  "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"+ props.text}
    </StyledHideBtn>
  );
};
