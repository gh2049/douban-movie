import React,{Component} from 'react'
// import Header from '../../components/Header'
import Content from '../../components/Content'
import MovieHeader from '../../components/MovieHeader'
import Navdrawer from '../../components/Navdrawer'

import './CoreLayout.scss'
import '../../styles/core.scss'

export class CoreLayout extends Component {
	render() {
		return (  
			<div className='container'>
				<div className="main drawer-open" ref="main">
					<MovieHeader toggleDrawer={this.toggleNavdrawer.bind(this)}/>
					<Content />
				</div>
				<Navdrawer />
  		</div>
  	)
	}

	toggleNavdrawer(){
		// console.log('toggle!')
		// console.log(this)
		this.refs.main.classList.toggle('drawer-open')
	}
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout

/*
export const CoreLayout = ({ children }) => (
  <div className='container'>
		<div className='core-layout__viewport'>
  		{children}
 		</div>
  </div>
) 
*/
