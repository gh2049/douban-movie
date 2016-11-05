export default {
  path: '*',
  indexRoute: {
    onEnter (nextState, replace) {
      replace('/home')
    }
  }
}
