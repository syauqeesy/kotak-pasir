class Tooltip {}

class ProjectItem {
  constructor (id) {
    this.id = id
    this.connectSwitchButton()
    this.connectMoreInfoButton()
  }

  connectMoreInfoButton() {

  }

  connectSwitchButton () {
    const projectItemElement = document.getElementById(this.id)
    const switchButton = projectItemElement.querySelector('button:last-of-type')
    switchButton.addEventListener('click', )
  }
}

class ProjectList {
  projects = []

  constructor (type) {
    const projectItems = document.querySelectorAll(`#${type}-projects li`)
    for (const projectItem of projectItems) {
      this.projects.push(new ProjectItem(projectItem.id))
    }
    console.log(this.projects)
  }

  addProject () {

  }
  
  switchProject (projectId) {
    // const projectIndex = this.projects.findIndex(project => project.id === projectId)
    // this.projects.splice(projectIndex, 1)
    this.projects = this.projects.filter(project => project.id !== projectId)
  }
}

class App {

  static init () {
    const activeProjectsList = new ProjectList('active')
    const finishedProjectsList = new ProjectList('finished')
  }
}

App.init()
