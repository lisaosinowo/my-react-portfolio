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
         <Language image={React} title="React" />
         <Language image={JS} title="JavaScript" />
         <Language image={PY} title="Python" />
         <Language image={TS} title="TypeScript" />
         <Language image={HTML} title="HTML" />
         <Language image={CSS} title="CSS" />
         <Language image={SASS} title="SASS" />
         <Language image={SQL} title="SQL" />
      </>
   );
};

export default Languages;
