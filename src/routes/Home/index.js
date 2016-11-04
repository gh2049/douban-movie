import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'Home',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Home = require('./containers/HomeContainer').default
      const reducer = require('./modules/home').default
      injectReducer(store, { key: 'home', reducer })
      cb(null, Home)
    })
  }
})
