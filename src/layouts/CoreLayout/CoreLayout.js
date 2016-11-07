import React,{Component} from 'react'
//import Header from '../../components/Header'

import MovieHeader from '../../components/MovieHeader'
import Navdrawer from '../../components/Navdrawer'

import './CoreLayout.scss'
import '../../styles/core.scss'

export class CoreLayout extends Component {
	render() {
		return (  
			<div className='container'>
				<div className="main" ref="main">
					<MovieHeader toggleDrawer={this.toggleNavdrawer.bind(this)}/>
          {this.props.children}
				</div>
				<Navdrawer toggleNavdrawer={this.toggleNavdrawer.bind(this)} history={this.props.history}/>
  		</div>
  	)
	}

	toggleNavdrawer(){
		this.refs.main.classList.toggle('drawer-open')
	}
}

export default CoreLayout