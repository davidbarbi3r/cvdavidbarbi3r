import { ThemeContext, LanguageContext } from "../hooks/Context";
import { colorTheme } from "../styles/colorTheme";
import React, { useContext } from "react";
import { keyframes, styled } from "@stitches/react";
import { ToggleBtn } from "../modals/SwitchTheme";
import david from "../assets/DSCF7007Lowdef.jpg";

export const Title = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const TitleContainer = styled("div", {
    position: "relative",
    width: "40%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid black",
    "@media(max-width: 850px)": {
      width: "100%",
      height: "500px",
    },
  });

  const rotate = keyframes({
    "0%": { transform: "rotateY(180deg)" },
    "100%": { transform: "rotateY(0deg)" },
  });

  const StyledTitle = styled("h1", {
    color: theme ? colorTheme.light.title : colorTheme.dark.title,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.2rem",
    "& span": {
      animation: `${rotate} 4s`,
    },
  });

  const StyledImg = styled("img", {
    width: "230px",
    borderRadius: "10px",
    margin: "6.5em 0 2em 0",
    border: "1px solid black",
  });

  return (
    <TitleContainer>
      <ToggleBtn></ToggleBtn>
      <StyledImg
        src={david}
        alt={language === "FR" ? "Photo de profil" : "Profil picture"}
      ></StyledImg>
      <StyledTitle>
        David Barbi<span>3</span>r
      </StyledTitle>
    </TitleContainer>
  );
};
