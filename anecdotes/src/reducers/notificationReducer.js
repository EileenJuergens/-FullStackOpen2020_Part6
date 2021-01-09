const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'REMOVE_NOTIFICATION':
      return '' 
    default:
      return state
  }
}

export const setNotification = (data, seconds) => {
  const milliseconds = seconds*1000
  return async dispatch => {
    await dispatch({
      type: 'SET_NOTIFICATION',
      data
    })
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIFICATION'
      })
    }, milliseconds)
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}


export default notificationReducer;
