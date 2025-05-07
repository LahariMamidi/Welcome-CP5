// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClickButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state

    let displayedButtonText
    if (isSubscribed === true) {
      displayedButtonText = 'Subscribed'
    } else {
      displayedButtonText = 'Subscribe'
    }

    return (
      <div className="welcome-bg">
        <h1 className="heading">Welcome</h1>
        <p className="desc">Thank you! Happy Learning</p>
        <button type="button" onClick={this.onClickButton} className="btn">
          {displayedButtonText}
        </button>
      </div>
    )
  }
}

export default Welcome
