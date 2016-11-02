import React,{Component} from 'react'
import './Header.scss'

export class Header extends Component {
  render() {
	  return(
		  <header className="navheader">
		    <h1 className="title">豆瓣电影</h1>
		    <span className="menuBtn fl" ref="menu" onClick={this.props.toggleDrawer}></span>
		  </header>
	  )
  }

  // toggleNavdrawer() {
		// this.props.toggleDrawer()
  // }

} 

export default Header
