export default (store) =>  ({
  path:'/celebrity/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Celebrity = require('./components/Celebrity').default
      // const reducer = require('./modules/Subject').default
      // injectReducer(store, { key: 'zen', reducer })
      cb(null, Celebrity)
    })
  }
})
