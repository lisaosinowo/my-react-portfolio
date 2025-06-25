import ProfileInfo from "./ProfileInfo";
import "../styles/_mixins.scss";
import "../styles/_body.scss";
import MainSection from "./MainSection";

const Body = () => {
   return (
      <>
         <div className="body-main-container">
            <div className="body-container">
               <ProfileInfo />
               <MainSection />
            </div>
         </div>
         
      </>
   );
};

export default Body;
