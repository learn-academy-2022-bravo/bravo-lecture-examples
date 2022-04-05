# React State
## Terminal commands to create a react application
Go to repository where you will be doing your react challenges. This repository will be the one you do all your git commands.
  - $ `cd react-challenges` 
Create a new branch. 
  - $ `git checkout -b <branch-name>`
`yarn create react-app` will bring in 1000s of code snippets to build your react application. This will be the only yarn command you run in this repository.
  - $ `yarn create react-app <app-name>`
Go inside the project folder. This will be the area you run all other yarn commands.
  - $ `cd <app-name>`
Open your text editor
Check that your react application is built correctly.
- $ `yarn start`

## Structure of a Display Class Component
```javascript
import React, { Component } from 'react'

class App extends Component {

  render() {
    return (
      <>
        <h1>Let Your Brain Rest Tracker</h1>
      </>
    )
  }
}

export default App
```

## Build your basic app
- Select the src folder in your text editor
- Select the App.js
- Remove the boilerplate information
- Paste a basic App class component
- Refactor for your project

## Structure of Logic Component Class
```javascript  
import React, { Component } from 'react'

class Tracker extends Component {
  constructor(props){
    super(props)
    this.state = {
      breaks: 0
    }
  }

  addBreak = () => {
    this.setState({breaks: this.state.breaks + 1})
  }

  render() {
    return(
      <>
        <p>Breaks: {this.state.breaks} </p>
        <button onClick={this.addBreak}>Add that self care</button>
      </>
    )
  }
}

export default Tracker
```


## Inline styling
  
- Option 1: Go to the opening tag of the element you want to change
    <button onClick={this.addResource} style={ {color: "purple"} }>
      Add that self care
    </button>

- Option 2: Update the state object
    // constructor section
      this.state = {
        resources: 0,
        color: "purple"
      }
    // render section
    <button onClick={this.addResource} style={ {color: this.state.color} }>
      Add that self care
    </button>
```

## Merging to Remote Repository

Leave the project folder and go to the main repository (react-challenges) 
- $ `cd ..`
Push your changes
- $ `git status`
- $ `git add .`
- $ `git commit -m "meaningful message here"`
- $ `git push origin <branch-name>`
Make a pull request
- Inside of the repository on GitHub, Click `Compare & pull request`
- You will then be redirected to a page where you can create a pull request. Click `Create pull request`