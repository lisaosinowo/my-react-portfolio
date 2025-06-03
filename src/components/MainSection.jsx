import { useState } from "react";
import Feed from "../sections/Feed";
import About from "../sections/About";
import Languages from "../sections/Languages";
import Projects from "../sections/Projects";
import SectionButton from "./SectionButton";

const MainSection = () => {
   const [active, setActive] = useState("feed");

   const handleSelect = (section) => {
      setActive(section);
      window.scrollTo({ top: 0, behavior: "smooth" }); 
   };

   const showSection = () => {
      switch (active) {
         case "feed":
            return <Feed />;
         case "about":
            return <About />;
         case "languages":
            return <Languages />;   
         case "projects":
            return <Projects />;
         default:
            return <Feed />;
      }
   };

   return (
      <>
         <SectionButton onSelect={handleSelect} />
         <div>{showSection()}</div>
      </>
   );
};

export default MainSection;
