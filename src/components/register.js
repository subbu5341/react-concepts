import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../register.css';
class Register extends Component {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this) // two ways we can call the function
    this.state = {
      newProject: {},
      name: props.initialName
    }
  }
  //default props declaration
  static defaultProps = { initialName: 'Register Page' }

  /*Updation Phase*/
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(Register):  Update props and state changes on conditional based ')
    console.log(this.props.name);
    console.log(nextProps.name);
    let shouldUpdate = true;
    return shouldUpdate;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate(Register):  Update anychanges pre component render')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate(Register):  Update anychanges post component render')
  }
  /*It calls only on Props changes case*/
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps(Register):  Triggers incase of props value changes')
 }

/*Unmount Phase*/
  componentWillUnmount() {
    console.log('componentWillUnmount(Register):  Before component removed from DOM')
  }
  save() {
    if(this.refs.name.value === '') {
      alert('Plz eneter details')
    } else {
      this.setState({newProject: {
        name: this.refs.name.value,
        email: this.refs.email.value,
        website: this.refs.website.value
      }}, function() {
        this.props.updateProjectList(this.state.newProject);
        this.refs.name.value = '';
        this.refs.email.value = '';
        this.refs.website.value = '';
      })
    }
  }
  render() {
    return (
      <div>
        <pre>
          <h3 className="title">{this.state.name}:<span style={{color: 'blue'}}>{this.props.name}</span></h3>
        Name: <input type="text" ref="name"/><br/><br/>
       email: <input type="email" ref="email"/><br/><br/>
     Website: <input type="text" ref="website"/><br/><br/>
        <button onClick={this.save}>save</button>
        <ul>{this.props.projectItem}</ul>
      </pre>
      </div>
    )
  }
}
/* propTypes*/
Register.propTypes = { initialName: PropTypes.string }

/* defaultProps*/
/*Register.defaultProps = {
  initialName: 'Register Page'
};*/
export default Register;
