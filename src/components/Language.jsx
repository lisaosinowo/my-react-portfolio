import "../styles/_languages.scss";

const Language = (props) => {
   return (
      <>
         <div className="language-section">
            <div className="language-main-container">
               <div className="language-container spacing">
                  <div className="language-entry">
                     <div className="lang-content">
                        <img className="lang-pic" src={props.image} />
                        <div className="lang-title">
                           <h3>{props.title}</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Language;
