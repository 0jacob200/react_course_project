import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({id, name, tasksIds, onClick}) => {
    const prjPath = `/projects/${id}`

    const handleClick = (event) => {
        onClick(id)
    }

    return (
        <div>
            <p>{id}. Project name: {name}</p>
            <Link to={prjPath}>
                <button onClick={handleClick}>To Tasks</button>
            </Link>
        </div>
    )
}

export default Project