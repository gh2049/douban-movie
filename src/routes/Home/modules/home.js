import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
const RECEIVE_Home = 'RECEIVE_Home'
const REQUEST_Home = 'REQUEST_Home'
const CLEAR_Home = 'CLEAR_Home'

// ------------------------------------
// Actions
// ------------------------------------


function requestHome () {
  return {
    type: REQUEST_Home
  }
}

let avaliableId = 0
export const receiveHome = (value) => ({
  type: RECEIVE_Home,
  payload: {
    text: value,
    id: avaliableId++
  }
})

export const clearHome = () => ({
  type: CLEAR_Home
})

export function fetchHome () {
  return (dispatch, getState) => {
    if (getState().Home.fetching) return
    dispatch(requestHome())
    return fetch('https://api.douban.com/v2/movie/in_theaters')
      .then(data => data.text())
      .then(text => dispatch(receiveHome(text)))
  }
}

export const actions = {
  requestHome,
  receiveHome,
  clearHome,
  fetchHome
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_Home]: (state) => {
    return ({...state, fetching: true})
  },
  [RECEIVE_Home]: (state, action) => {
    return ({...state, fetching: false, text: state.text})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  text: []
}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
