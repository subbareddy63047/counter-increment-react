// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="span-element">{count}</span> times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button type="submit" className="button" onClick={this.increment}>
          click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
