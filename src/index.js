import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const handleIncreaseGood = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const handleIncreaseNeutral = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const handleIncreaseBad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const handleReset = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  return (
    <div>
      <button onClick={handleIncreaseGood}>good</button> 
      <button onClick={handleIncreaseNeutral}>neutral</button> 
      <button onClick={handleIncreaseBad}>bad</button>
      <button onClick={handleReset}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
