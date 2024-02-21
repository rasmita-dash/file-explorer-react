import React, { useState } from 'react'

const Directory = (props) => {
    const [isExpanded, setIsExpanded] =useState(false);
  return (
    props.content.type === "Directory" ?
    (<div>
        <div className={`indent_${props.indent}`} onClick={() => setIsExpanded(!isExpanded)}>{props.content.name}</div>
        {isExpanded && props.content.content?.map((c)=>{
            return <Directory key={c.name} content={c} indent={props.indent+1}/>
        })}
    </div>) :
    (<div className={`indent_${props.indent}`}>
        {props.content.name}
    </div>)
    
  )
}

export default Directory;