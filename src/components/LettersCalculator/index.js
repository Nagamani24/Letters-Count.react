// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChange = event => {
    const text = event.target.value
    const l = text.length
    this.setState({count: l})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1>
            Calculate the
            <br /> Letters you
            <br /> enter
          </h1>
          <label className="label" htmlFor="input">
            Enter the phrase
          </label>
          <br />
          <input
            placeholder="Enter the phrase"
            type="text"
            className="input"
            id="input"
            onChange={this.onChange}
          />
          <p className="description">No.of Letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
