// ------------------------------------
// Constants
// ------------------------------------
const RECEIVE_Home = 'RECEIVE_Home'
const REQUEST_Home = 'REQUEST_Home'
const CLEAR_Home = 'CLEAR_Home'

// ------------------------------------
// Actions
// ------------------------------------

function requestHome() {
  return {
    type: REQUEST_Home
  }
}

export const receiveHome = (value) => ({
  type: RECEIVE_Home,
  text: value
})

import fetchJsonp from 'fetch-jsonp'
export function fetchHome() {
  return (dispatch, getState) => {
    dispatch(requestHome())
    fetchJsonp('http://api.douban.com/v2/movie/in_theaters')
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        console.log('parsed json', json)
        dispatch(receiveHome(json))
      })
      .catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }
}

export const actions = {
  requestHome,
  receiveHome,
  fetchHome
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_Home]: (state) => {
    return ({...state, fetching: true, getValue: false })
  },
  [RECEIVE_Home]: (state, action) => {
    return ({...state, fetching: false, text: action.text, getValue: true })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  getValue: false,
  text: {}
}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
