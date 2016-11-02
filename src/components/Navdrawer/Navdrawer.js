import React,{Component} from 'react'
import './Navdrawer.scss'

export class Navdrawer extends Component {
  render() {
	  return(
		  <aside className="navheader">
		    <h1 className="title">豆瓣电影</h1>
		    <span className="menuBtn fl" ref="menu" onClick={this.props.toggleDrawer}></span>
		  </aside>
	  )
  }

  // toggleNavdrawer() {
		// this.props.toggleDrawer()
  // }

} 

export default Header
