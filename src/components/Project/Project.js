import React from 'react'

const Project = ({id, name, tasksIds}) => {
    return (
        <div>
            <p>{id}. Project name: {name}</p>
            <button>To Project's Tasks</button>
        </div>
    )
}

export default Project