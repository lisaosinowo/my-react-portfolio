import profilePic from '../media/lisa-pink.jpg'
import check from '../media/body/correct.png'
import '../styles/_feed.scss';

const FeedItem = (props) => {
   return (
      <>
         <div className="feed-section-containers feed-spacing">
            <div className="feed-container spacing">
               <div className="feed-content" id="content1">
                  <div className="feed-top-content">
                     <div className="profile-pic-container">
                        <img
                           id="mini-profile-pic-pinned"
                           src={profilePic}
                        />
                     </div>
                     <div className="feed-content-info">
                        <div className="name-date">
                           <p className="name-date-name">Lisa</p>
                           <img className="blue-tick" src={check}  />
                           <p className="username-feed">@lisaosinowo</p>
                           <p className="dot-name-date">·</p>
                           <p className="name-date-date">{props.date}</p>
                        </div>
                     </div>
                  </div>

                  <div className="feed-desc-container">
                     <div className="feed-desc">
                        <p>
                           {props.feedText}
                        </p>
                        <img
                           className="photo"
                           src={props.image}
                           
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default FeedItem;