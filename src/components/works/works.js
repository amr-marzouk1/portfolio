import React from 'react'
import './works.css'
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.png'
import portfolio4 from '../../assets/portfolio4.png'
import portfolio5 from '../../assets/portfolio5.png'
import portfolio6 from '../../assets/portfolio6.png'

const Works = () => {
  return (
    <section id="works">
      <h1 className="worksTitle">My Portfolio</h1>
      <span className="worksDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora culpa
        vero voluptatem itaque. Nihil, quo?
      </span>
      <div className="worksImgs">
        <img src={portfolio1} alt="" className="worksImg" />
        <img src={portfolio2} alt="" className="worksImg" />
        <img src={portfolio3} alt="" className="worksImg" />
        <img src={portfolio4} alt="" className="worksImg" />
        <img src={portfolio5} alt="" className="worksImg" />
        <img src={portfolio6} alt="" className="worksImg" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  )
}
export default Works
