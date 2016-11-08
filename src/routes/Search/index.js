export default () => ({
  path: 'search/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Search = require('./components/Search').default
      // const reducer = require('./modules/zen').default
      // injectReducer(store, { key: 'zen', reducer })
      cb(null, Search)
    })
  }
})