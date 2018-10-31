import React, { Component } from 'react';
import '../App.css';
import Register from '../components/register';
import LinkWithTooltip from './tooltip';
import axios from 'axios';

class App extends Component {
  /*intialization Phase*/
  constructor() {
    super()
    this.state = {
      memberDetails: [],
      name: 'userDetails'
    };
    this.updateProject = this.updateProjects.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
  }
  /*mounting Phase*/
  componentWillMount() {
    console.log('componentWillMount (ProjectList): pre component mount')
  }
  fetchWeather() {
    var that = this
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      that.setState({memberDetails: response.data})
    })
  }
  componentDidMount() {
    this.interval = setInterval(this.fetchWeather, 15000);
    console.log('componentDidMount (ProjectList): post component mount')
  }

  /*Updation Phase*/
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate (ProjectList):  Update props and state changes on conditional based ')
    console.log(this.state.name);
    console.log(nextState.name);
    let shouldUpdate = true
    return shouldUpdate;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate(ProjectList):  Update anychanges pre render')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate(ProjectList):  Update anychanges post render')
  }
  /*Unmount Phase*/
    componentWillUnmount() {
      clearInterval(this.interval);
      console.log('componentWillUnmount(projectList):  Before component removed from DOM')
    }
  updateProjects(project) {
    let projects = this.state.memberDetails;
    project.id = this.state.memberDetails.length + 1;
    projects.push(project);
    this.setState({memberDetails: projects,  name: 'detailsUpdated!'})
  }
  deleteProject(index) {
    let project = this.state.memberDetails;
    project.splice(index, 1)
    this.setState({memberDetails: project})
  }

  routeChange() {
    //console.log(this.props)
    this.props.history.push('/')
  }
  //Force update example
  forceUpdateHandler(){
    this.forceUpdate();
  };

  render() {
    let projectList;
    const {params} = this.props.match
    console.log(params)
    projectList = this.state.memberDetails.map((item, index) =>
      (
        <div id="detailsChart" key= { item.id }>
          <ul type="circle">
            <li>
              <span>
                <LinkWithTooltip tooltip={item.name} href="#" id={item.id}>
                    <i className="fa fa-file-text" aria-hidden="true"></i>
                </LinkWithTooltip>
              </span>
              <strong>{index}: <span>Name: { item.name } </span>- <span>email: {item.email} </span>-<span> website: { item.website}</span></strong>
              <button onClick= {this.deleteProject.bind(this, index)}>X</button>
            </li>
          </ul>
        </div>
      )
    )
    return (
      <div className="App">
        <span>Param: {params.id}</span>
        <Register name={this.state.name} projectItem= {projectList} updateProjectList= {this.updateProject}/>
        <p style= {{textAlign: 'center'}}>
          {/*<Link to="/">Home</Link>*/}
          <button onClick={() => this.routeChange()}>Home</button>
          <button onClick= {this.forceUpdateHandler} >FORCE UPDATE</button>
          <span>Random Number : { Math.random() }</span>

        </p>
      </div>
    );
  }
}

export default App;
