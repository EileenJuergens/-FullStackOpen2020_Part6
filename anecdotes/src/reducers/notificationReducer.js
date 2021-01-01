const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_VOTE_NOTIFICATION':
      return `you voted for '${action.data.content}'`
    case 'SET_CREATE_NOTIFICATION':
      console.log(action)
      return `you created '${action.data}'`
    case 'REMOVE_NOTIFICATION':
      return '' 
    default:
      return state
  }
}

export const setVoteNotification = (data) => {
  return {
    type: 'SET_VOTE_NOTIFICATION',
    data
  }
}

export const setCreateNotification = (data) => {
  return {
    type: 'SET_CREATE_NOTIFICATION',
    data
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}


export default notificationReducer;
