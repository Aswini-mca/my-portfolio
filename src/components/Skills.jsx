import React from 'react'
import '../css/Skills.css'
import HtmlIcon from '../Assets/Skills/Html.svg'
import CssIcon from '../Assets/Skills/Css.svg'
import JavascriptIcon from '../Assets/Skills/Javascript.svg'
import ReactIcon from '../Assets/Skills/React.svg'
import NodeJsIcon from '../Assets/Skills/NodeJs.svg'
import MongoDBIcon from '../Assets/Skills/MongoDb.svg'
import ExpressIcon from '../Assets/Skills/Express.svg'
import BootstrapIcon from '../Assets/Skills/Bootstrap.svg'
import MaterialUiIcon from '../Assets/Skills/Material-Ui.svg'

function Skills() {

  const skills = [
    { skill: 'Html', icon: HtmlIcon },
    { skill: 'Css', icon: CssIcon },
    { skill: 'JavaScript', icon: JavascriptIcon },
    { skill: 'React', icon: ReactIcon },
    { skill: 'NodeJs', icon: NodeJsIcon },
    { skill: 'MongoDB', icon: MongoDBIcon },
    { skill: 'Express', icon: ExpressIcon },
    { skill: 'Bootstrap', icon: BootstrapIcon },
    { skill: 'Material-Ui', icon: MaterialUiIcon }
  ]

  return (
    <div className='m-5'>
      <h2 className='container p-4 text-center'>My Skills</h2>
      <div className='skill-container'>
        {skills.map((skill, index) => (
          <div key={index} className='skill-item'>
            <img src={`${skill.icon}`} className='skill-img' alt={skill.skill} />
            <h5>{skill.skill}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills