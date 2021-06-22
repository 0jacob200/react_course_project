import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({id, name}) => {
    const prjPath = `/projects/${id}`
    return (
        <div>
            <p>{id}. Project name: {name}</p>
            <Link to={prjPath}>
                <button>To Tasks</button>
            </Link>
        </div>
    )
}

export default Project