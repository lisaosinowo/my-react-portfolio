import React from 'react';
import '../styles/_sectionbutton.scss';

const SectionButton = () => {
   return (
      <>
         <div className="portfolio-sections">
            <span className="nav-links">Feed</span>
            <span className="nav-links">About</span>
            <span className="nav-links">Projects</span>
         </div>
      </>
   );
}

export default SectionButton;