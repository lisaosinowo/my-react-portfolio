import React from "react";
import briefcaseIMG from '../media/body/briefcase.png';
import linkIMG from '../media/body/link.png';
import birthdaycakeIMG from '../media/body/birthday.png';
import calendarIMG from '../media/body/calendar.png';
import '../styles/_details.scss';

const Details = () => {
   return (
      <>
         <div className="profile-details">
            <div className="prof-details-sections">
               <img src={briefcaseIMG} alt="" />
               <p>Available</p>
            </div>
            <div className="prof-details-sections">
               <img src={linkIMG} alt="" />
               <p>
                  <a href="#">Links</a>
               </p>
            </div>
            <div className="prof-details-sections">
               <img src={birthdaycakeIMG} alt="" />
               <p>January 6th</p>
            </div>
            <div className="prof-details-sections">
               <img src={calendarIMG} alt="" />
               <p>Joined April 2025</p>
            </div>
         </div>
      </>
   );
};

export default Details;
