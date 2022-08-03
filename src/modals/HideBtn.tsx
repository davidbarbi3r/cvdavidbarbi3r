import { styled } from "@stitches/react";
import React, { useState } from "react";

interface HideBtnProps {
  text: string;
}

export const HideBtn = ({ text }: HideBtnProps) => {
  const [hide, setHide] = useState(true);

  const toggleHide = () => {
    setHide((prev) => !prev);
  };

  const StyledHideBtn = styled("button", {
    display: "inline",
    border: "none",
    background: "none",
  });

  return (
    <StyledHideBtn onClick={() => toggleHide()}>
      {hide ? "[...]" : text}
    </StyledHideBtn>
  );
};
