// import 'babel-polyfill'
// import fetch from 'isomorphic-fetch'
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

import fetchJsonp from 'fetch-jsonp'
export function fetchHome () {
  return (dispatch, getState) => {
    // require('es6-promise').polyfill()
    
    fetchJsonp('http://api.douban.com/v2/movie/subject/1764796')
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json', json)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })

    // $.getJSON("http://api.douban.com/v2/movie/subject/1764796&jsoncallback=?",
    //   function (data) {
    //       console.log(data)
    //   }
    // )
    // dispatch(receiveHome(text)))
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
