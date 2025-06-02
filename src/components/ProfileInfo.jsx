import React from "react";
import check from "../media/body/correct.png";
import codeIMG from "../media/body/code.png";
import '../styles/_profileinfo.scss';
import Details from './Details';

const ProfileInfo = () => {
   return (
      <>
         <div className="profile-info-container">
            <div className="profile-name">
               <h1>Lisa Osinowo</h1>
               <img src={check} alt="" />
            </div>

            <p id="username">@lisaosinowo</p>

            <div className="profile-quote">
               <p>
                  "The best way to predict the future is to create it." -Alan Kay
               </p>
               <img src={codeIMG} alt="" />
            </div>

            <p id="header-para-desc">
               Software Engineer. Web Developer. Chemical Engineering Graduate.
            </p>
         </div>
         <Details />            
      </>
   );
};

export default ProfileInfo;
