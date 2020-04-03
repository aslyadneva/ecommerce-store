import React from 'react'; 
import './sectionheader.css'; 

const SectionHeader = (props) => {
  return (
    <header className="SectionHeader Heading h1">{props.title}</header>
  )
}

export default SectionHeader; 
