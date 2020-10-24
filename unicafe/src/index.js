import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (!good && !neutral && !bad){
    return <p>No feedback given yet.</p>
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={good+neutral+bad}/>
        <Statistic text="average" value={(good*1+neutral*0+bad*-1)/(good+neutral+bad)}/>
        <Statistic text="positive" value={`${(100*good)/(good+neutral+bad)} %`}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const handleIncreaseGood = () => {
    store.dispatch({ type: 'GOOD' })
  }

  const handleIncreaseNeutral = () => {
    store.dispatch({ type: 'OK' })
  }

  const handleIncreaseBad = () => {
    store.dispatch({ type: 'BAD' })
  }

  const handleReset = () => {
    store.dispatch({ type: 'ZERO' })
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={handleIncreaseGood} text='good' /> 
      <Button onClick={handleIncreaseNeutral} text='neutral' /> 
      <Button onClick={handleIncreaseBad} text='bad' />
      <Button onClick={handleReset} text='reset stats' />
      <h2>The Statistics</h2>
      <Statistics
        good={store.getState().good}
        neutral={store.getState().ok}
        bad={store.getState().bad} />
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
