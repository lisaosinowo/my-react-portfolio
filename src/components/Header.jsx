import React from "react";
import Lisa from "../media/lisa-pink.jpg";
import "../styles/_header.scss";
import Button from "./Button";

const Header = () => {
   return (
      <>
         <div className="header-wrapper">
            <div className="header-container">
               <div className="hero">
                  <img
                     id="thumbnail"
                     src="https://compote.slate.com/images/306254c7-594a-4db5-8f18-48ba6020a771.gif"
                     alt=""
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
