import React, { useState, createContext } from "react";

interface IThemeContext {
  theme: boolean;
  toggleTheme: () => void;
}

export type TLanguage = "FR" | "EN";

interface ILanguageContext {
  language: string;
  toggleLanguage: React.Dispatch<React.SetStateAction<string>>;
}

type ContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);

const ThemeContextProvider = (props: ContextProviderProps) => {
  const [theme, setTheme] = useState(true);

  function toggleTheme() {
    setTheme((prev) => !prev);
    console.log(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const LanguageContextProvider = (props: ContextProviderProps) => {
  const [language, setLanguage] = useState("FR");

  function toggleLanguage() {
    setLanguage((prev) => (prev === "FR" ? "EN" : "FR"));
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export {
  ThemeContextProvider,
  ThemeContext,
  LanguageContextProvider,
  LanguageContext,
};
