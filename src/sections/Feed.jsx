import FeedItemPinned from '../components/FeedItemPinned';
import FeedItem from '../components/FeedItem';
import Moodie from '../media/feed-section/Moodie.png'

const Feed = () => {
   return (
      <>
         <FeedItemPinned />
         <FeedItem date='19 June 2025' feedText='Cybersecurity final project finished ✅ CFG +Masters finished ✅' />
         <FeedItem date='09 June 2025' feedText='Starting the cybersecurity final project today with my group. We have to write a report on the security vulnerabilities of our CFGDegree Group Project. #ThinkLikeASecurityAnalyst' />
         <FeedItem date='29 May 2025' feedText='I got a MERIT in my Fullstack Development CFG Degree 🥳 I have come a long way from Chemical Engineering 💃🏾' />
         <FeedItem date='19 May 2025' feedText='Today is the day that I start the CFG +Masters in Cybersecurity 👩🏾‍💻. However, I have been told that it is a step up from the CFG Degree. 🥲 #wishmeluck' />
         <FeedItem date='9 May 2025' feedText='After 16 weeks of intense learning I have finished the CFG Degree in Fullstack Development! #BigAchievement 🥳' />
         <FeedItem date='4 May 2025' feedText='Allow me to introduce to you all... MOODIE 🎦 An app that gives you movie recommendations based on your mood! You can either take a Mood Quiz or use the Random Movie Generator.' image={Moodie} />
         <FeedItem date='4 May 2025' feedText='CFG Group Project completed ✅ I cannot believe that we made a React app in 3 weeks!! #WomenInTech #TeamworkMakesTheDreamWork' />
         <FeedItem date='10 April 2025' feedText='I have just found out that I got 83% in the CFG Foundation Exam and an Average Assignment Grade of 97% 😌' />
      </>
   );
}

export default Feed;