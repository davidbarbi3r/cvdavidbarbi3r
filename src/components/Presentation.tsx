import { styled } from "@stitches/react";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { colorTheme } from "../styles/colorTheme";
import React, { useContext } from "react";
import { Title } from "./Title";
import { Code } from "./Code";

export const Presentation = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const MainContainer = styled("div", {
    display: "flex",
    height: "100vh",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme
      ? colorTheme.light.background
      : colorTheme.dark.background,
    "@media(max-width: 850px)": {
      flexFlow: "column",
      overflow: "scroll",
      position: "fixed",
    },
  });

  return (
    <MainContainer>
      <Title />
      <Code />
    </MainContainer>
  );
};
