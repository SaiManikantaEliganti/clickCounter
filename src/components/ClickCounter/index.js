import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1 className="text">
          The Button has been clicked{' '}
          <span className="countElement">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
