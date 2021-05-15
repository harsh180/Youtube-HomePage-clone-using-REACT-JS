import React from 'react'
import './Sidebar1.css';
function Sidebar1({selected, Icon,title}) {
    return (
        <div className={`Sidebar_row ${selected && "selected"}`}>
            <Icon className="Sidebar__icons"/>
            <h2 className="Sidebar__title">{title}</h2>
        </div>
    )
}

export default Sidebar1