import React from 'react'

const CategoryLabel = (props) => {
    return (
        <div style={{display:"inline-block", marginRight:"2%"}}>
            <input
          type="radio"
          value={props.value}
          name="filter"
          id="props.value"
          onClick={(event) => props.onClick(event.target.value)}
        />
        <label htmlFor="props.value" className="filterLabel">{props.name}</label>
        </div>
    )
}

export default CategoryLabel
