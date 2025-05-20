import React from "react";
import ProfileInfo from './ProfileInfo';
import '../styles/_mixins.scss';
import SectionButton from "./SectionButton";
import MainSection from './MainSection';

const Body = () => {
   return (
      <>
         <ProfileInfo />
         <SectionButton />
         <MainSection />
      </>
   );
}

export default Body;