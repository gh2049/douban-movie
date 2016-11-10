import React,{Component} from 'react'
//import Header from '../../components/Header'

import MovieHeader from '../../components/MovieHeader'
import Navdrawer from '../../components/Navdrawer'

import './CoreLayout.scss'
import '../../styles/core.scss'

export class CoreLayout extends Component {
	render() {
		const	toggleDrawer = this.toggleNavdrawer

		return (  
			<div className='container'>
				<div className="main" ref="main">
					<MovieHeader toggleDrawer={toggleDrawer.bind(this)}/>
          {this.props.children}
				</div>
				<Navdrawer toggleNavdrawer={toggleDrawer.bind(this)} history={this.props.history}/>
  		</div>
  	)
	}
	
	toggleNavdrawer(){
		this.refs.main.classList.toggle('drawer-open')
	}
}

export default CoreLayout