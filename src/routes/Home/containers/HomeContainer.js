import { connect } from 'react-redux'
import { fetchHome, clearhome } from './../modules/home'

import home from '../components/home'

const mapDispatchtoProps = {
  fetchHome
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps, mapDispatchtoProps)(home)
