import React from 'react'
import './skills.css'
import uiDesign from '../../assets/ui-design.png'
import webDesign from '../../assets/web-design.png'
import appDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi
        cum quaerat possimus qui voluptate accusamus enim vitae. Molestias,
        omnis.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={uiDesign} alt="ui design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>ui/ux Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              consequatur.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="web design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
              officia.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={appDesign} alt="app design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quo?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skills
