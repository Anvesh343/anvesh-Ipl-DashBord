// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onLightMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const modeClass = isDarkMode ? 'dark-mode' : 'light-mode'
    return (
      <div className="app-container">
        <div className={`container ${modeClass}`}>
          <h1 className="heading">click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onLightMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
