import "../styles/_languages.scss";

const Language = (props) => {
   return (
      <>
         <div className="language-section">
            <div className="language-main-container">
               <div className="language-container spacing">
                  <div className="top-content">
                     <img className="photo" src={props.image} />
                  </div>
                  <div className="bottom-content">
                     <h3>{props.title}</h3>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Language;
