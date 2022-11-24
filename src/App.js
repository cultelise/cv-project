import './App.css';
import { Component } from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component {
  constructor(props) {
    super(props);

    this.onBC = this.onBC.bind(this);
    this.countUp = this.countUp.bind(this)
    this.countDown = this.countDown.bind(this)
    this.state = {
      count: 10,
    };
  }

  countDown() {
    this.setState ({
      count: this.state.count - 1,
    })
  }

  countUp() {
    this.setState ({
      count: this.state.count + 1,
    })
  }

  onBC() {
    console.log('Button has been clicked.')
  }

  render() {
    const {count} = this.state;

    return (
      <div className="App">
        <Welcome name={'Elise'} onDownButtonClicked={this.countDown} onUpButtonClicked={this.countUp}/>
        <p>{count}</p>
        <Hello name={'Elise'} age='31'/>
      </div>
    );
  }
}

export default App;
