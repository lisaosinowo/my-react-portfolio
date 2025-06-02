import { useState } from "react";
import Feed from "../sections/Feed";
import About from "../sections/About";
import Projects from "../sections/Projects";
import SectionButton from "./SectionButton";

const MainSection = () => {
   const [active, setActive] = useState("feed");

   const showSection = () => {
      switch (active) {
         case "feed":
            return <Feed />;
         case "about":
            return <About />;
         case "projects":
            return <Projects />;
         default:
            return <Feed />;
      }
   };

   return (
      <>
         <SectionButton onSelect={setActive} />
         <div>{showSection()}</div>
      </>
   );
};

export default MainSection;
