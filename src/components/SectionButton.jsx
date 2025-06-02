import '../styles/_sectionbutton.scss';

const SectionButton = ({onSelect}) => {
   return (
      <>
         <div className="portfolio-sections">
            <span onClick={() => onSelect('feed')}>Feed</span>
            <span onClick={() => onSelect('about')}>About</span>
            <span onClick={() => onSelect('projects')}>Projects</span>
         </div>
      </>
   );
}

export default SectionButton;