### Build React Application
- cd into the react-challenges repository
- Create a new branch: $ checkout -b func-props-initials1-initials2 (ex. func-props-aw-sp)
- Create a new React application with no spaces: $ yarn create react-app func-props-student1-student2 (ex. yarn create react-app func-props-austin-sarah)
- cd into the project
- Check that the application built correctly: $ yarn start 
- Now that a server is running in the terminal. Open a second tab to run more terminal commands. `Command + t` if using an external terminal
- Open the project in a text editor

### Build class components in App.js and components folder
- Remove boilerDynamicMenu info from App.css, App.js, READme
#### Display component in App.js
- resource for a basic class component
https://github.com/learn-academy-2022-bravo/Syllabus/blob/main/react/create-react-app.md
```javascript
import React, { Component } from 'react'

class App extends Component{
  render(){
    return(
      <>
        <h1>Aloha Bravo!!!</h1>
      </>
    )
  }
}

export default App
```
- Update the JSX to what you need
- import React, { Component } from 'react'
```javascript
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
      <h1>Bravo BBQ</h1>
      <h2>Adult Menu</h2>
        <ul>
          <li>Steak</li>
          <li>Brisket</li>
          <li>Margaritas</li>
        </ul>
      <h2>Pet Menu</h2>
        <ul>
          <li>Cheese burgers</li>
          <li>Puppocinos</li>
          <li>Chicken</li>
        </ul>
      </>
    )
  }
}

export default App
``` 
#### Transforming into logic component in App.js
https://github.com/learn-academy-2022-bravo/Syllabus/blob/main/react/props.md

- Place a constuctor method above the render method
- Use the high order function .map to iterate across each array to display the values within each array
https://github.com/learn-academy-2022-bravo/Syllabus/blob/main/javascript/higher-order-functions.md
```javascript
import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      adultMenu: ["steak", "brisket", "margaritas"],
      petMenu: ["cheese burgers", "puppocinos", "chicken"]
    }
  }
  render() {
    return(
      <>
        <h1>Bravo BBQ</h1>
        <h2>Adult Menu</h2>
        <ul>
          {this.state.adultMenu.map(value => {
            return <li>{value}</li>
          })}
        </ul>
        <h2>Pet Menu</h2>
        <ul>
          {this.state.petMenu.map(value => {
            return <li>{value}</li>
          })}
        </ul>
      </>
    )
  }
}
export default App
```
#### Make code more dynamic, reusable 
- Create a directory in src called components
- Add a file `DynamicMenu.js` 
- Add basic class component 
- Remove the function and paste into the DynamicMenu.js
```javascript
import React, { Component } from 'react'

class DynamicMenu extends Component{
  render(){
    return(
      <>
        <ul>
          {this.state.adultMenu.map(value => {
            return <li>{value}</li>
          })}
        </ul>
      </>
    )
  }
}

export default DynamicMenu
``` 
- import and call the component in App.js

#### Pass data down the river to other components
- In App.js (parent component), create a variable that will hold the state object on the component call
```javascript
import React, { Component } from 'react'
import DynamicMenu from './components/DynamicMenu'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      adultMenu: ["steak", "brisket", "margaritas"],
      petMenu: ["cheese burgers", "puppocinos", "chicken"]
    }
  }
  render() {
    return(
      <>
        <h1>Bravo BBQ</h1>
        <h2>Adult Menu</h2>
        <DynamicMenu menuItems={ this.state.adultMenu }/>
        <h2>Pet Menu</h2>
        <DynamicMenu menuItems={ this.state.petMenu }/>
      </>  
    )
  }
}

export default App
```

- In DynamicMenu.js (child component), update the HOF
```javascript
import React, { Component } from 'react'

class DynamicMenu extends Component{
  render(){
    return(
      <>
        <ul>
          {this.props.menuItems.map(value => {
            return <li>{value}</li>
          })}
        </ul>
      </>
    )
  }
}

export default DynamicMenu
``` 

### Functional Props - passing info back up the river, from child component to parent component

- Add button to the list item
```javascript
        <ul>
          {this.props.menuItems.map(value => {
            return(
              <li>
                <button>{value}</button>
              </li>
            )
          })}
        </ul>
```

- Store new data in the state object on App.js
```javascript
  constructor(props){
    super(props)
    this.state = {
      adultMenu: ["steak", "brisket", "margaritas"],
      petMenu: ["cheese burgers", "puppocinos", "chicken"],
      plate: []
    }
  }
```
- Designate a space to display that data on App.js
```javascript
      <h1>Bravo BBQ</h1>
      <h2>Adult Menu</h2>
      <DynamicMenu menuItems={ this.state.adultMenu } />
      <h2>Pet Menu</h2>
      <DynamicMenu menuItems={ this.state.petMenu } />
      <h3>What's on Your Plate?</h3>
      <ul>
        {this.state.plate.map(value => {
          return <li>{value}</li>
        })}
      </ul>
```

- create a function in App.js to pass the new data to DynamicMenu.js
``` javascript
fillPlate = (item) => {
  alert(item)
}
```

- pass function in the component call, using a variable to hold the function call
```javascript
      <h1>Bravo BBQ</h1>
      <h2>Adult Menu</h2>
      <DynamicMenu menuItems={ this.state.adultMenu } fillPlate={this.fillPlate}/>
      <h2>Pet Menu</h2>
      <DynamicMenu menuItems={ this.state.petMenu } fillPlate={this.fillPlate}/>
      <h3>What's on Your Plate?</h3>
      <ul>
        {this.state.plate.map(value => {
          return <li>{value}</li>
        })}
      </ul>
```

- allow onClick attribute on the child component to trigger the function, remember to include an argument
```javascript
        <ul>
          {this.props.menuItems.map(value => {
            return(
              <li>
                <button onClick={ this.props.fillPlate(value) }>
                  {value}
                </button>
              </li>
            )
          })}
        </ul>
```

- to prevent the function from immediately invoking add an anonymous that will allow the click event to occur before the function runs
```javascript
        <ul>
          {this.props.menuItems.map(value => {
            return(
              <li>
                <button onClick={ () => this.props.fillPlate(value) }>
                  {value}
                </button>
              </li>
            )
          })}
        </ul>
```

- update the function on App.js to reflect what is currently in the state object and to add what is being selected into the array being held by the key of plate
``` javascript
fillPlate = (item) => {
  this.setState({plate: [...this.state.plate, item]})
}
```

Best practice is to also consider the index of the arrays being used in our application. This consideration will clear the warning
`Warning: Each child in a list should have a unique "key" prop.`

- On the parent component
```javascript
        <h3>What's on your plate?</h3>
        <ul>
          {this.state.plate.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
```

- On the child component
```javascript
        <ul>
          {this.props.menuItems.map((value, index) => {
            return(
              <li key={index}>
                <button onClick={ this.props.fillPlate(value) }>
                  {value}
                </button>
              </li>
            )
          })}
        </ul>
```

### Pushing changes to gitHub
- cd out of the project repository: $ cd ..
- $ git status
- $ git add .
- $ git commit -m "message"
- $ git push origin <branch-name>
