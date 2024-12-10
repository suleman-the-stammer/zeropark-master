import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// css :
import './style/BlogArticles.scss'


// Assets | logo | Icons :
import { MdMailOutline } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import img1 from '../../../assets/Article-banner/banner-1.jpg'
import img2 from '../../../assets/Article-banner/banner-2.jpg'
import img3 from '../../../assets/Article-banner/banner-3.jpg'
import img4 from '../../../assets/Article-banner/banner-4.jpg'




const articles = [

  {
    image: img2,
    title: 'Zeropark Media Buying Tips: Email Placements Performance Could Grow 30%',
    author: 'Gabriela Cendrzak',
    date: '02 Jul, 2024',
    text: 'Gear up, as we have an interesting insight to share about what’s getting hot in Commerce Media 🔥  You may…'
  },
  {
    image: img3,
    title: 'The evolution and future of monetization: the publisher cookies landscape',
    author: 'Gabriela Cendrzak',
    date: '02 Jul, 2024',
    text: '📢📢 COOKIES UPDATE 📢📢 Just a day after we launched this article on the cookies landscape for publishers, Anthony Chavez,…'
  },
  {
    image: img4,
    title: 'Content monetization: How to increase revenue with commerce media?',
    author: 'Gabriela Cendrzak',
    date: '02 Jul, 2024',
    text: 'The digital advertising landscape evolves with no breaks, and website owners indeed need to constantly seek new (or rather incremental)ways…'
  },

  {
    image: img2,
    title: 'Zeropark Media Buying Tips: Email Placements Performance Could Grow 30%',
    author: 'Gabriela Cendrzak',
    date: '02 Jul, 2024',
    text: 'Gear up, as we have an interesting insight to share about what’s getting hot in Commerce Media 🔥  You may…'
  },
  {
    image: img3,
    title: 'The evolution and future of monetization: the publisher cookies landscape',
    author: 'Gabriela Cendrzak',
    date: '02 Jul, 2024',
    text: '📢📢 COOKIES UPDATE 📢📢 Just a day after we launched this article on the cookies landscape for publishers, Anthony Chavez,…'
  },
  {
    image: img4,
    title: 'Content monetization: How to increase revenue with commerce media?',
    author: 'Gabriela Cendrzak',
    date: '02 Jul, 2024',
    text: 'The digital advertising landscape evolves with no breaks, and website owners indeed need to constantly seek new (or rather incremental)ways…'
  },

];

const data = [
  "Advertising strategies",

  "Affiliate marketing",

  "Awards",

  "Banner Advertising",

  "Black Friday",

  "Brand Safety",

  "Case - study",

  "Compliance",

  "Consumer Insights",

  "Cookies",

  "Futureproof",

  "Influencers",

  "Monetization"
];



const BlogArticles = () => {
  const Navigate = useNavigate()

  const [showMore, setShowMore] = useState(false);
  const itemsToShow = showMore ? data : data.slice(0, 3);

  return (
    <div className="blog-page">

      <div className="container max-width max-width-md">
        <div className="blog-header">
          <ul>
            <li>All</li>
            <li>Ad-tech</li>
            <li>Commerce Media</li>
            <li>Industry</li>
            <li>Monetization</li>
          </ul>
        </div>
        <div className="custom-select">
          <div className='field'><h4>Categories</h4>
            <select placeholder='all selected'>
              <option value="0">
                All Selected
              </option>

            </select></div>
          <div className='field'>
            <h4>Chose tag</h4>
            <select placeholder='all selected'>
              <option value="0">
                All Selected
              </option>

            </select></div>

        </div>
        <div className="grid">
          <main className="main-content">
            <section className="articles">
              <div className="Article-first">
                <div className='grid-1'>
                  <div className="content">
                    <h2>Publisher monetization: a comprehensive guide to monetizing websites with commerce media</h2>
                    <span>Gabriela Cendrzak • 02 Jul, 2024</span>
                    <p>In today’s rapidly evolving digital landscape, finding effective ways to monetize content is crucial for publishers seeking sustainable revenue streams.…</p>
                  </div>
                  <img src={img1} alt="" />
                </div>
              </div>
              {articles.map((article, index) => (
                <article key={index} className="article" onClick={() => Navigate("details")}>
                  <img src={article.image} alt="" />
                  <div className="content">
                    <h2>{article.title}</h2>
                    <span>{article.author} • {article.date}</span>
                    <p>{article.text}</p></div>

                </article>
              ))}
            </section>
          </main>
          <section className="sidebar">
            <div className="check-box">
              <ul>


                {itemsToShow.map((item, index) => (
                  <li key={index}> <input type="checkbox" name="" id="" /> {item}</li>
                ))}


                <li onClick={() => setShowMore(!showMore)}> {showMore ? "Show less" : "Show more"} {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />} </li>

              </ul>

            </div>
            <div className="subscribe">
              <div className='icon'><MdMailOutline size={50} style={{ color: 'white' }} /></div>
              <h2>Follow The Signal</h2>
              <p>Subscribe to The Signal newsletter by Zeropark & stay on top of the latest trends with industry updates delivered straight to your inbox!</p>
              <form>
                <input type="text" placeholder="First name" />
                <input type="email" placeholder="Business email" />
                <div className="checkbox-container">
                  <input type="checkbox" id="consent" />
                  <label htmlFor="consent">I agree to receive commercial information regarding Zeropark via email.</label>
                </div>
                <button type="submit" className='btn'>Subscribe</button>
              </form>
              <div className='info'><span>Commerce Media Tech Sp. z o.o., Krakow, Poland, is the controller of your personal data. It will be processed to send you The Signal newsletter and for our marketing purposes. Please see more information here.</span></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogArticles;
