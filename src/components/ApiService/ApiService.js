import {NormalisationState} from "../Data/Data"

class ApiService{
    BASE_URL = 'http://valerystatinov.com/api'

     request = (url, method= 'GET', body) => {
         return fetch(`${this.BASE_URL}${url}`, {
             method,
             headers: {
                 Token: 'jacob',
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(body)
         }).then(res => res.json())
     }

    get(url) {
        return this.request(url)
    }
    post(url, body) {
        return this.request(url, 'POST', body)
    }
    put(url, body) {
        return this.request(url, 'PUT', body)
    }

    loadTasks = (projId) => {
        return this.get(`/projects/${projId}/tasks`).then(result => result)
    }

    loadProj() {
        return this.get('/projects/').then(result => {
            const projects = []
            Object.values(result).map((project) => {
                return projects.push({id:project.id, name:project.name, tasksCont: project.tasksCont})
            })
            let LoadTasksToProj= projects.map(proj => this.loadTasks(proj.id))

            const NormState = Promise.all(LoadTasksToProj).then(responses =>{
                Object.entries(responses).map((res
                                               , id) => {
                    return projects[id].tasks = res[1]
                })
                return NormalisationState(projects)
            })
            return NormState
        })
            .catch(error => new Error('ApiService.loadProj(): ', error))
    }

    uploadNewProj = (name, url='/projects/') => {
        const project = {
            name: name
        }
        return this.post(url, project)
    }

    uploadNewTask = (projectId, name, description, url='/projects') => {
        const task = {
            'name': name,
            'description': description,
            'completed': false
        }
        return this.post(`${url}/${ projectId}/tasks/`, task)
    }

    changeStatus = (projectId, id, name, description, completed, url='/projects') => {
        const updatedTask = {
            name,
            description,
            priority: 1,
            'completed': !completed,
            'projectId': Number(projectId)
        }
        console.log(updatedTask);
        return this.put(`${url}/${projectId}/tasks/${id}/`, updatedTask)
    }

}

export default ApiService