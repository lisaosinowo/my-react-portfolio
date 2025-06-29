import React from "react";
import Lisa from "../media/lisa-pink.jpg";
import "../styles/_header.scss";
import Button from "./Button";
import Coder from '../media/desk-setup.jpg';

const Header = () => {
   return (
      <>
         <div className="header-wrapper">
            <div className="header-container">
               <div className="hero">
                  <img
                     id="thumbnail"
                     src={Coder}
                  />
                  <div className="profile-pic-and-btn">
                     <img id="profile-pic" src={Lisa} alt="" />
                     <a
                        href="https://www.linkedin.com/in/lisa-osinowo-3bb18b236/"
                        target="_blank"
                     >
                        <Button />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Header;
