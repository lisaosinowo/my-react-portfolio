import React from 'react';
import FeedItemPinned from '../components/FeedItemPinned';
import FeedItem from '../components/FeedItem';
import CFGdegree from '../media/feed-section/CFGDegree-Logo.png'
import CFGMasters from '../media/feed-section/CFGMasters-Logo.png'
import Moodie from '../media/feed-section/Moodie.png'

const Feed = () => {
   return (
      <>
         <FeedItemPinned />
         <FeedItem date='21 May 2025' feedText='Learning about Kali Linux and currently have it working. It seems easy to use so far.. Although I still cannot believe that this can be used for penetration testing 😯 💻' />
         <FeedItem date='19 May 2025' feedText='Today is the day that I start the CFG +Masters in Cybersecurity 👩🏾‍💻. However, I have been told that it is a step up from the CFG Degree. 🥲 #wishmeluck' image={CFGMasters} />
         <FeedItem date='9 May 2025' feedText='After 16 weeks of intense learning I have finished the CFG Degree in Fullstack Development! #BigAchievement 🥳' image={CFGdegree} />
         <FeedItem date='4 May 2025' feedText='Allow me to introduce to you all... MOODIE 🎦 An app that gives you movie recommendations based on your mood! You can either take a Mood Quiz or use the Random Movie Generator.' image={Moodie} />
         <FeedItem date='4 May 2025' feedText='CFG Group Project completed ✅ I cannot believe that we made a React app in 3 weeks!! #WomenInTech #TeamworkMakesTheDreamWork' />
         <FeedItem date='10 April 2025' feedText='I have just found out that I got 83% in the CFG Foundation Exam and an Average Assignment Grade of 97% 😌' />
      </>
   );
}

export default Feed;