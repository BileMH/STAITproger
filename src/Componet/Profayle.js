import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export default class Profayle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      Profayle: {
        Fullname: "BILEL MHENNI",
        Bio: "Fullstack js",
        profession: "developer",
        img: "https://www.shutterstock.com/image-photo/web-design-online-technology-content-260nw-424677625.jpg",
      }
    }
  }

  componentDidMount(){
    setInterval (()=>{
      this.setState(prevstate => ({
        count: prevstate.count+1
      }))
    }, 1000)
  }

  render() {
    return (
      <div>
        <h2>{this.state.Profayle.Fullname}</h2>
        <h2>{this.state.Profayle.Bio}</h2>
        <h2>{this.state.Profayle.profession}</h2>
        <h2>{this.state.count}</h2>
        <img style={{ width:"500px" }} src={this.state.Profayle.img} alt="img"/>
      </div>
    )
  }
}