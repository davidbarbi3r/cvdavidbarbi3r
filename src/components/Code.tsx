import { styled, css } from "@stitches/react";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { colorTheme } from "../styles/colorTheme";
import { HideBtn } from "../modals/HideBtn";
import { useContext } from "react";

export const Code = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const StyledCodeContainer = styled("section", {
    backgroundColor: theme
      ? colorTheme.light.background
      : colorTheme.dark.background,
    height: "100%",
    width: "100%",
  });

  const StyledConsole = styled("section", {
    display: "flex",
    flexDirection: "column",
    margin: "1em",
    padding: "1em",
    backgroundColor: theme ? colorTheme.light.console : colorTheme.dark.console,
    height: "stretch",
    overflowY: "auto",
    scrollbarColor: "dark",
    scrollBehavior: "scroll",
    fontFamily: "Ubuntu Mono, monospace;",
    "@media(max-width: 850px)": {
      overflowX: "scroll",
      scrollBehavior: "auto",
      height: "max-content",
      flexFlow: "nowrap",
      flexDirection: "column",
      whiteSpace: "nowrap",
    },
  });

  const span = css({
    variants: {
      variant: {
        number: {
          color: theme ? colorTheme.light.numbers : colorTheme.dark.numbers,
          width: "2em",
          textAlign: "left",
          marginRight: "1em",
        },
        curly: {
          color: theme
            ? colorTheme.light.curlybraces
            : colorTheme.dark.curlybraces,
        },
        key: {
          color: theme ? colorTheme.light.key : colorTheme.dark.key,
        },
        text: {
          color: theme ? colorTheme.light.text : colorTheme.dark.text,
        },
        other: {
          color: theme ? colorTheme.light.other : colorTheme.dark.other,
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
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    "&:focus": {
      textDecoration: "underline",
    },
  });

  const hideSkills =
    language === "FR" ? (
      <HideBtn text='"Analyse des données avec Power Query / Pivot / BI", "Contrôle des comptes par cycles", "Démarche d audit"' />
    ) : (
      <HideBtn text='"Audit approach", "Data analysis with Power Query / Pivot / BI", "Financial statement audit",' />
    );
  const shownSkills =
    language === "FR"
      ? '"Analyse financière", "Encadrement des juniors & stagiaires",'
      : '"Financial analysis", "Training & coaching juniors and interns",';

  return (
    <StyledCodeContainer>
      <StyledConsole>
        <StyledLine>
          <span className={span({ variant: "number" })}>1</span>
          <span className={span({ variant: "key" })}>const</span>
          <span className={span({ variant: "other" })}>
            {language === "FR" ? " candidat" : " applicant"}{" "}
          </span>{" "}
          = <span className={span({ variant: "curly" })}>{"{"}</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>2</span>{" "}
          <span className={span({ variant: "key" })}>
            {language === "FR" ? "\u00a0nom" : "\u00a0name"}
          </span>{" "}
          : "<span className={span({ variant: "text" })}>David Barbier</span>",
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>3</span>{" "}
          <span className={span({ variant: "key" })}>
            {language === "FR" ? "\u00a0emploi" : "\u00a0job"}
          </span>{" "}
          : "
          <span className={span({ variant: "text" })}>
            {language === "FR"
              ? "Developpeur Front-end TypeScript/React"
              : "Front-end TypeScript/React developer"}
          </span>
          ",
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>4</span>{" "}
          <span className={span({ variant: "key" })}>{"\u00a0age"}</span> :{" "}
          <span className={span({ variant: "curly" })}>30</span>,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>5</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>6</span>{" "}
          <span className={span({ variant: "key" })}>
            {language === "FR" ? "\u00a0localisation" : "\u00a0location"}
          </span>{" "}
          :{" "}
          <span className={span({ variant: "text" })}>
            {language === "FR"
              ? '"Ajaccio, FR" | "Télétravail"'
              : '"Ajaccio, FR" | "Remote"'}
          </span>
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>7</span>{" "}
          <span className={span({ variant: "key" })}>{"\u00a0email"}</span> :{" "}
          <StyledLink href="mailto:davidbarbi3r@gmail.com">
            "davidbarbi3r@gmail.com"
          </StyledLink>
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>8</span>{" "}
          <span className={span({ variant: "key" })}>{"\u00a0github"}</span> :{" "}
          <StyledLink href="https://github.com/davidbarbi3r" target="#">
            "github.com/davidbarbi3r"
          </StyledLink>
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>9</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>10</span>
          <span className={span({ variant: "key" })}>
            {language === "FR"
              ? "\u00a0compétencesFront "
              : "\u00a0frontSkills "}
          </span>
          {" : "}
          <span className={span({ variant: "curly" })}>[ </span>
          <span className={span({ variant: "text" })}>
            "TypeScript", "React", "JavaScript", "HTML", "CSS"
          </span>
          <span className={span({ variant: "curly" })}>{" ] "}</span>
          {","}
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>11</span>
          <span className={span({ variant: "key" })}>
            {language === "FR" ? " compétencesBack " : " backSkills "}
          </span>
          {" : "}
          <span className={span({ variant: "curly" })}>[ </span>
          <span className={span({ variant: "text" })}>
            "NodeJS", "MongoDB", "Express", "Joi"
          </span>
          <span className={span({ variant: "curly" })}>{" ] "}</span>
          {","}
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>12</span>
          <span className={span({ variant: "key" })}>
            {language === "FR" ? " autres " : " other "}
          </span>
          {" : "}
          <span className={span({ variant: "curly" })}>[ </span>
          <span className={span({ variant: "text" })}>
            "VSCode", "WSL2 CLI", "Git", "OOP"
          </span>
          <span className={span({ variant: "curly" })}>{" ] "}</span>
          {","}
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>13</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>14</span>
          <span className={span({ variant: "key" })}>
            {language === "FR" ? " projets" : " projects"}
          </span>{" "}
          {" : "} <span className={span({ variant: "curly" })}>{"["}</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>15</span>
          <span className={span({ variant: "curly" })}>{" { "}</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>16</span>
          <span className={span({ variant: "other" })}>
            {language === "FR"
              ? "\u00a0\u00a0\u00a0\u00a0\u00a0nom"
              : "\u00a0\u00a0\u00a0\u00a0\u00a0name"}
          </span>{" "}
          : <span className={span({ variant: "text" })}>"Meh-Fight"</span> ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>17</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0genre"}
          </span>{" "}
          : <span className={span({ variant: "text" })}>"Card game"</span> ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>18</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0tech"}
          </span>{" "}
          {" "}
          <span className={span({ variant: "text" })}>
            {" "}
            : <span className={span({ variant: "curly" })}>{"[ "}</span>
            "TypeScript", "React"{" "}
            <span className={span({ variant: "curly" })}>{"] "}</span>
          </span>{" "}
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>19</span>
          <span className={span({ variant: "other" })}>
            {language === "FR"
              ? "\u00a0\u00a0\u00a0\u00a0\u00a0liens"
              : "\u00a0\u00a0\u00a0\u00a0\u00a0links"}
          </span>{" "}
          :{" "}
          <span className={span({ variant: "text" })}>
            <span className={span({ variant: "curly" })}>{"[ "}</span>{" "}
            <StyledLink
              href="https://github.com/davidbarbi3r/meh-fight-ts"
              target="#"
            >
              "github.com/davidbarbi3r/meh-fight-ts"
            </StyledLink>
            ,{" "}
            <StyledLink
              href="https://davidbarbi3r.github.io/meh-fight-ts/"
              target="#"
            >
              "davidbarbi3r.github.io/meh-fight-ts/"
            </StyledLink>
            <span className={span({ variant: "curly" })}>{"] "}</span>
          </span>{" "}
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>20</span>
          <span className={span({ variant: "curly" })}>{" } "}</span>,
          <span className={span({ variant: "curly" })}>{" { "}</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>21</span>
          <span className={span({ variant: "other" })}>
            {language === "FR"
              ? "\u00a0\u00a0\u00a0\u00a0\u00a0nom"
              : "\u00a0\u00a0\u00a0\u00a0\u00a0name"}
          </span>{" "}
          : <span className={span({ variant: "text" })}>"Quizzical"</span> ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>22</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0genre"}
          </span>{" "}
          : <span className={span({ variant: "text" })}>"Quiz"</span> ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>23</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0tech"}
          </span>{" "}
          : <span className={span({ variant: "text" })}> "React"</span> ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>24</span>
          <span className={span({ variant: "other" })}>
            {language === "FR"
              ? "\u00a0\u00a0\u00a0\u00a0\u00a0liens"
              : "\u00a0\u00a0\u00a0\u00a0\u00a0links"}
          </span>{" "}
          :{" "}
          <span className={span({ variant: "text" })}>
            <span className={span({ variant: "curly" })}>{"[ "}</span>{" "}
            <StyledLink
              href="https://github.com/davidbarbi3r/quizzical"
              target="#"
            >
              "github.com/davidbarbi3r/quizzical"
            </StyledLink>
            ,{" "}
            <StyledLink
              href="https://davidbarbi3r.github.io/quizzical/"
              target="#"
            >
              "davidbarbi3r.github.io/quizzical/"
            </StyledLink>
            <span className={span({ variant: "curly" })}>{"] "}</span>
          </span>{" "}
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>25</span>
          <span className={span({ variant: "curly" })}>{" }] "}</span>,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>26</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>27</span>
          <span className={span({ variant: "key" })}>
            {language === "FR" ? " expériences" : " experiences"}
          </span>{" "}
          {" : "} <span className={span({ variant: "curly" })}>{"["}</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>28</span>
          <span className={span({ variant: "curly" })}>{" { "}</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>29</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}date
          </span>{" "}
          : <span className={span({ variant: "text" })}>"2022-20XX"</span> ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>30</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "poste" : "job"}
          </span>{" "}
          :{" "}
          <span className={span({ variant: "text" })}>
            {language === "FR"
              ? "Développeur Front-end TypeScript / React"
              : "Front-end TypeScript / React developer"}
          </span>{" "}
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>31</span>
          <span className={span({ variant: "curly" })}>{" } "}</span>,{" "}
          <span className={span({ variant: "curly" })}>{" { "}</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>32</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}date
          </span>{" "}
          : <span className={span({ variant: "text" })}>"2019-2022"</span> ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>33</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "entreprise" : "firm"}
          </span>{" "}
          : <span className={span({ variant: "text" })}>"KPMG / Anaxa"</span> ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>34</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "poste" : "job"}
          </span>{" "}
          :{" "}
          <span className={span({ variant: "text" })}>
            {language === "FR" ? "Auditeur financier" : "Financial auditor"}
          </span>{" "}
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>35</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "compétences" : "skills"}
          </span>{" "}
          : <span className={span({ variant: "curly" })}>{"[ "}</span>
          <span className={span({ variant: "text" })}>
            {shownSkills}
            {hideSkills}
          </span>{" "}
          <span className={span({ variant: "curly" })}>{"] "}</span>,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>36</span>
          <span className={span({ variant: "curly" })}>{" } "}</span>,{" "}
          <span className={span({ variant: "curly" })}>{" { "}</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>37</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}date
          </span>{" "}
          : <span className={span({ variant: "text" })}>"2015-2019"</span> ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>38</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "entreprise" : "firm"}
          </span>{" "}
          : <span className={span({ variant: "text" })}>"Cabinet Robert"</span>{" "}
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>39</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "poste" : "job"}
          </span>{" "}
          :{" "}
          <span className={span({ variant: "text" })}>
            "Comptable & Auditeur"
          </span>{" "}
          ,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>40</span>
          <span className={span({ variant: "other" })}>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0"}
            {language === "FR" ? "compétences" : "skills"}
          </span>{" "}
          : <span className={span({ variant: "curly" })}>{"[ "}</span>
          <span className={span({ variant: "text" })}>
            {language === "FR"
              ? '"Organisation", "Travail en équipe", "Gestion & relationel client"'
              : '"Organization", "Teamwork", "Customer relationship management"'}
          </span>{" "}
          <span className={span({ variant: "curly" })}>{"] "}</span>,
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>41</span>
          <span className={span({ variant: "curly" })}>{" }] "}</span>
          {","}
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>42</span>
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>43</span>
          <span className={span({ variant: "key" })}>
            {language === "FR" ? " passions " : " hobbies "}
          </span>
          {" : "}
          <span className={span({ variant: "curly" })}>[ </span>
          <span className={span({ variant: "text" })}>
            {language === "FR"
              ? '"Escalade", "VTT", "Blockchain", "Finance", "Photographie"'
              : '"Climbing", "MTB", "Blockchain", "Finance", "Photography"'}
          </span>
          <span className={span({ variant: "curly" })}>{" ] "}</span>
          {","}
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>44</span>
          <span className={span({ variant: "key" })}>
            {language === "FR" ? " réseaux " : " socials "}
          </span>
          {" : "}
          <span className={span({ variant: "curly" })}>[ </span>
          <span className={span({ variant: "text" })}>
            <StyledLink href="https://twitter.com/gnark_eth" target="#">
              "twitter"
            </StyledLink>
            ,{" "}
            <StyledLink href="https://discord.gg/m2ym9Cuz" target="#">
              "discord : Gnark#1230"
            </StyledLink>
            ,{" "}
            <StyledLink
              href="https://www.linkedin.com/in/dbarbier/?_l=fr_FR"
              target="#"
            >
              "Linkedin"
            </StyledLink>
          </span>
          <span className={span({ variant: "curly" })}>{" ] "}</span>
          {","}
        </StyledLine>
        <StyledLine>
          <span className={span({ variant: "number" })}>45</span>
          <span className={span({ variant: "curly" })}>{"} "}</span>
        </StyledLine>
      </StyledConsole>
    </StyledCodeContainer>
  );
};
