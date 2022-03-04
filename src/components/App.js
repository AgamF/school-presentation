import React, { Component } from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import 'animate.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'first'
    }
  }

  navigateToSecond = () => {
    this.setState({ route: 'second' });
  }

  navigateToThird = () => {
    this.setState({ route: 'third' });
  }

  navigateToFourth = () => {
    this.setState({ route: 'fourth' });
  }

  endPresentation = () => {
    this.setState({ route: 'end' });
  }

  render() {
    const { route } = this.state;
    if (route === 'first') {
      return (
        <div>
          <First navigateToSecond={this.navigateToSecond}/>
        </div>
      );
    } else if (route === 'second') {
      return (
        <div>
          <Second navigateToThird={this.navigateToThird}/>
        </div>
      );
    } else if (route === 'third') {
      return (
        <div>
          <Third navigateToFourth={this.navigateToFourth}/>
        </div>
      );
    } else if (route === 'fourth') {
      return (
        <div>
          <Fourth endPresentation={this.endPresentation}/>
        </div>
      );
    } else if (route === 'end') {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 className='animate__animated animate__backInUp' style={{ fontSize: '50px' }}>תודה על ההקשבה</h1>
        </div>
      );
    }
  }
}

export default App;