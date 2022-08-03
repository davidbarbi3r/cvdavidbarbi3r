import { styled, css } from "@stitches/react";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { colorTheme } from "../styles/colorTheme";
import {HideBtn} from "../modals/HideBtn"
import React, { useContext } from "react";

export const Code = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const StyledCodeContainer = styled("section", {
    backgroundColor: theme
      ? colorTheme.light.background
      : colorTheme.dark.background,
    height: "100vh",
    width: "100%",
  });

  const StyledConsole = styled("section", {
    margin: "1em",
    padding: "1em",
    backgroundColor: theme ? colorTheme.light.console : colorTheme.dark.console,
    height: "stretch",
  });

  const span = css({
    variants: {
      variant: {
        number: {
          color: theme ? colorTheme.light.numbers : colorTheme.dark.numbers,
          width: "2em",
          textAlign: "right",
          marginRight: "1em",
        },
        curly: {
          color: theme
            ? colorTheme.light.curlybraces
            : colorTheme.dark.curlybraces,
        },
        key: {
          color: theme 
            ? colorTheme.light.key
            : colorTheme.dark.key,
        },
        text: {
          color: theme 
            ? colorTheme.light.text 
            : colorTheme.dark.text,
        },
        other: {
          color: theme 
            ? colorTheme.light.other 
            : colorTheme.dark.other,
        },
      },
    },
  });

  const StyledLine = styled("p", {
    color: theme ? colorTheme.light.text : colorTheme.dark.text,
    textAlign: "left",
    width: "100%",
  });

  const StyledLink = styled("a", {
    color: theme ? colorTheme.light.link : colorTheme.dark.link,
  });

  return (
    <StyledCodeContainer>
      <StyledConsole>
        <StyledLine>
          <span className={span({ variant: "number" })}>1</span>
          <span className={span({ variant: "curly" })}>{"{"}</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>2</span>{" "}
          <span className={span({ variant: "key" })}>
            {language === "FR" ? " nom" : " name"}
          </span>{" "}
          : "<span className={span({ variant: "text" })}>David Barbier</span>",
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>3</span>{" "}
          <span className={span({ variant: "key" })}>
            {language === "FR" ? " emploi" : " job"}
          </span>{" "}
          : "
          <span className={span({ variant: "text" })}>
            {language === "FR" ? "Developpeur Front-end TypeScript/React" : "Front-end TypeScript/React developer"} 
          </span>
          ",
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>4</span>{" "}
          <span className={span({ variant: "key" })}>age</span> :{" "}
          <span className={span({ variant: "curly" })}>30</span>,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>5</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>6</span>{" "}
          <span className={span({ variant: "key" })}>
            {language === "FR" ? "localisation" : "location"}
          </span>{" "}
          :{" "}
          <span className={span({ variant: "text" })}>
            {language === "FR"
              ? '"Ajaccio, FR" | "Télétravail"'
              : '"Ajaccio, FR | Remote"'}
          </span>
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>7</span>{" "}
          <span className={span({ variant: "key" })}>email</span> :{" "}
          <StyledLink href="mailto:davidbarbi3r@gmail.com">
            "david.barbi3r@gmail.com"
          </StyledLink>
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>8</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>9</span>
          <span className={span({ variant: "key" })}>
            {language === "FR" ? "expériences" : "experiences"}
          </span>{" "}
          {" : "} <span className={span({ variant: "curly" })}>{"["}</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>10</span>
          <span className={span({ variant: "curly" })}>{" { "}</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>10</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}date
          </span>{" "}
          : <span className={span({ variant: "text" })}>"2022-20XX"</span> ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>11</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "poste" : "job"}
          </span>{" "}
          : <span className={span({ variant: "text" })}>{language === "FR" ? "Développeur Front-end TypeScript / React" : "Front-end TypeScript / React developer"}</span>{" "}
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>10</span>
          <span className={span({ variant: "curly" })}>{" } "}</span>,{" "}
          <span className={span({ variant: "curly" })}>{" { "}</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>10</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}date
          </span>{" "}
          : <span className={span({ variant: "text" })}>"2019-2022"</span> ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>11</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "entreprise" : "firm"}
          </span>{" "}
          : <span className={span({ variant: "text" })}>"KPMG / Anaxa"</span>{" "}
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>12</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "poste" : "job"}
          </span>{" "}
          :{" "}
          <span className={span({ variant: "text" })}>
            {language === "FR" ? "Auditeur financier": "Financial auditor"}
          </span>{" "}
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>13</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "compétences" : "skills"}
          </span>{" "}
          : <span className={span({ variant: "curly" })}>{"[ "}</span>
          <span className={span({ variant: "text" })}>
          {language === "FR" ? `"Analyse de processus financiers", ""Encadrement des juniors et stagiaires", ${<HideBtn text='"Analyse des données avec Power Query / Pivot / BI", "Contrôle des comptes par cycles", "Démarche d audit"'/>}`: '"Financial analysis", "Audit approach", "Data analysis with Power Query / Pivot / BI", "Financial statement audit", "Training & coaching juniors and interns"}'}
          </span>{" "}
          <span className={span({ variant: "curly" })}>{"] "}</span>,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>10</span>
          <span className={span({ variant: "curly" })}>{" } "}</span>,{" "}
          <span className={span({ variant: "curly" })}>{" { "}</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>10</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}date
          </span>{" "}
          : <span className={span({ variant: "text" })}>"2015-2019"</span> ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>11</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "entreprise" : "firm"}
          </span>{" "}
          : <span className={span({ variant: "text" })}>"Cabinet Robert"</span>{" "}
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>12</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "poste" : "job"}
          </span>{" "}
          :{" "}
          <span className={span({ variant: "text" })}>
            "Comptable & Auditeur junior"
          </span>{" "}
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>13</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "compétences" : "skills"}
          </span>{" "}
          : <span className={span({ variant: "curly" })}>{"[ "}</span>
          <span className={span({ variant: "text" })}>
          {language === "FR" ? 'Organisation", "Travail en équipe", "Gestion & relationel client': '"Organization", "Teamwork", "Customer relationship management"'}
          </span>{" "}
          <span className={span({ variant: "curly" })}>{"] "}</span>,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>10</span>
          <span className={span({ variant: "curly" })}>{" } "}</span>,{" "}
          <span className={span({ variant: "curly" })}>{" { "}</span>
        </StyledLine>
      </StyledConsole>
    </StyledCodeContainer>
  );
};
