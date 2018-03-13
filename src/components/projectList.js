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
    this.updateProject = this.updateProjects.bind(this)
  }
  /*mounting Phase*/
  componentWillMount() {
    console.log('componentWillMount (ProjectList): pre component mount')
  }
  componentDidMount() {
    var that = this
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      that.setState({memberDetails: response.data})
    })
    console.log('componentDidMount (ProjectList): post component mount')
  }

  /*Updation Phase*/
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate (ProjectList):  Update props and state changes on conditional based ')
    console.log(this.state.name);
    console.log(nextState.name);
    let shouldUpdate = this.state.name !== nextState.name;
    return shouldUpdate;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate(ProjectList):  Update anychanges pre render')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate(ProjectList):  Update anychanges post render')
  }
  /*It calls only on Props changes case*/
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps (ProjectList):  Update anychanges after render')
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
              <strong>{index}: Name: { item.name } - email: {item.email} - website: { item.website}</strong>
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

        </p>
      </div>
    );
  }
}

export default App;
