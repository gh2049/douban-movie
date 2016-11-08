export default (store) =>  ({
  path:'/subject/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Subject = require('./components/Subject').default
      // const reducer = require('./modules/Subject').default
      // injectReducer(store, { key: 'zen', reducer })
      cb(null, Subject)
    })
  }
})
