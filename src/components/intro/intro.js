import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">hello,</span>
        <span className="introText">
          Iam <span className="introName">Amr</span>
          <br />
          web developer
        </span>
        <p className="introPara">
          Lorem ipsum dolor sit amet gfgftrdc consect <br />
          etur adipisicing elit. Aliquid, iusto.
        </p>
        <Link to="contact">
          <button className="btn">
            <img src={btnImg} alt="hire me" className="btnImg" />
            Hire me
          </button>
        </Link>
        <img src={bg} alt="intro bg" className="bg" />
      </div>
    </section>
  )
}
export default Intro
