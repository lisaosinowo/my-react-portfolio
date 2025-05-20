import React from "react";
import pin from '../media/feed-section/pushpin.png'
import profilePic from '../media/lisa.jpg'
import check from '../media/body/correct.png'
import lisa from '../media/feed-section/lisaBlue.jpg'
import '../styles/_feed.scss';

const FeedItemPinned = () => {
   return (
      <>
         <div className="feed-section-containers">
            <div className="feed-container bottom-spacing">
               <div className="feed-content" id="content1">
                  <div className="feed-top-content">
                     <div className="profile-pic-pin">
                        <img id="pushpin-img" src={pin} />
                        <img
                           id="mini-profile-pic-pinned"
                           src={profilePic}
                           
                        />
                     </div>
                     <div className="feed-content-info">
                        <p id="pinned-name">Pinned</p>
                        <div className="name-date-pinned">
                           <p className="name-date-name">Lisa</p>
                           <img className="blue-tick" src={check}  />
                           <p className="username-feed">@lisaosinowo</p>
                           <p className="dot-name-date">·</p>
                           <p className="name-date-date">15 April 2025</p>
                        </div>
                     </div>
                  </div>

                  <div className="feed-desc-container">
                     <div className="feed-desc">
                        <p>
                           Welcome to my Portfolio 🤗 This is a space where I
                           post my coding journey with JavaScript, React, Python, HTML, and CSS + SASS. Feel free to browse through
                           this site!
                        </p>
                        <img
                           className="photo"
                           src={lisa}
                           
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default FeedItemPinned;
