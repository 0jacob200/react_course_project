import React from 'react'
import {combineReducers} from "redux";

import projectreducer from './projectreducer'
import taskreducer from './taskreducer'

export const rootReducer = combineReducers({
    projectsById: projectreducer,
    tasksById: taskreducer
})