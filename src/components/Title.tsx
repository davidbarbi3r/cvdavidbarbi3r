import { ThemeContext, LanguageContext } from "../hooks/Context";
import { colorTheme } from "../styles/colorTheme";
import React, { useContext } from "react";
import { keyframes, styled } from "@stitches/react";
import { ToggleBtn } from "../modals/SwitchTheme";

export const Title = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const TitleContainer = styled("div", {
    position: "relative",
    width: "40%",
    height:'100vh',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid black",
    "@media(max-width: 850px)": {
        width: "100%",
    }
  });
  
  const rotate = keyframes({
    '0%': { transform: 'rotateY(180deg)' },
    '100%': { transform: 'rotateY(0deg)' },
  });

  const StyledTitle = styled("h1", {
    color: theme ? colorTheme.light.title : colorTheme.dark.title,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& span" : {
      animation: `${rotate} 4s`,
    }
  });

  const StyledIcon = styled("button", {
        width: "fit-content",
        display: "flex", 
        alignItems: "center",
        backgroundColor: theme ? colorTheme.light.numbers : colorTheme.dark.numbers
  })

  return (
    <TitleContainer>
        <ToggleBtn></ToggleBtn>
        {/* <img src="moi.jpg" alt="moi en image"></img> */}
        <StyledTitle>David Barbi<span>3</span>r</StyledTitle>
    </TitleContainer>)
};
