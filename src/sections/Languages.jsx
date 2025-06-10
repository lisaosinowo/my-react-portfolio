import Language from "../components/Language";
import React from "../media/languages-section/react-1.svg";
import JS from "../media/languages-section/javascript-1.svg";
import PY from "../media/languages-section/python-5.svg";
import TS from "../media/languages-section/typescript.svg";
import HTML from "../media/languages-section/html.webp";
import CSS from "../media/languages-section/css.webp";
import SASS from "../media/languages-section/sass-1.svg";
import SQL from "../media/languages-section/sql.svg";

const Languages = () => {
   return (
      <>
         <Language image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" title="React" />
         <Language image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" title="JavaScript" />
         <Language image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" title="Python" />
         <Language image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" title="TypeScript" />
         <Language image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" title="HTML" />
         <Language image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" title="CSS" />
         <Language image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" title="SASS" />
         <Language image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" title="SQL" />
      </>
   );
};

export default Languages;
