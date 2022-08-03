import { styled } from "@stitches/react";
import { useContext } from "react";
import { LanguageContext, ThemeContext } from "../hooks/Context";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { colorTheme } from "../styles/colorTheme";

const ToggleBtn = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { toggleLanguage, language } = useContext(LanguageContext);
  const icon = theme ? (
    <MoonIcon color={colorTheme.light.title} width="25px" height="25px" />
  ) : (
    <SunIcon color={colorTheme.dark.title} width="22px" height="22px" />
  );

  const StyledToggleBtn = styled("button", {
    textDecoration: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: theme ? colorTheme.light.title : colorTheme.dark.title,
    "&:hover": {
      fontWeight: "bold",
    },
  });

  const StyledToggleContainer = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "1em",
    marginBlock: "2em"
  });

  return (
    <StyledToggleContainer>
      <StyledToggleBtn onClick={toggleTheme} key="1">
        {icon}
      </StyledToggleBtn>
      <StyledToggleBtn onClick={() => toggleLanguage()} key="2">
        {language === "FR" ? "< EN />" : "< FR />"}
      </StyledToggleBtn>
    </StyledToggleContainer>
  );
};

export { ToggleBtn };
