import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timer: 0,
    isStart: false,
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      const {isStart} = this.state
      if (isStart) {
        this.setState(prevState => ({
          timer: prevState.timer + 1,
        }))
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval)
  }

  onStartTime = () => {
    this.setState({
      isStart: true,
    })
  }

  onStopTime = () => {
    this.setState({
      isStart: false,
    })
  }

  onResetTime = () => {
    this.setState({
      timer: 0,
      isStart: false,
    })
  }

  formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`
  }

  render() {
    const {timer} = this.state
    return (
      <div className="bg-container">
        <div className="main">
          <h1 className="title">Stopwatch</h1>
          <div className="time-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="img"
              />
              <h1 className="time-heading">Timer</h1>
            </div>
            <h1 className="time-details">{this.formatTime(timer)}</h1>
            <div className="btn-container">
              <button
                className="btn btn1"
                type="button"
                onClick={this.onStartTime}
              >
                start
              </button>
              <button
                className="btn btn2"
                type="button"
                onClick={this.onStopTime}
              >
                stop
              </button>
              <button
                className="btn btn3"
                type="button"
                onClick={this.onResetTime}
              >
                reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
