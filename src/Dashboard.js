import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <h1 style="color:blue;font-family:elephant;font-size:30px;text-align:center">{this.props.name}</h1>
        </div>
    );    
  }
}
export default Dashboard;