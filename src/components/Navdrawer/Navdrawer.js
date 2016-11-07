import React,{Component} from 'react'
import { IndexLink, Link } from 'react-router'
import './Navdrawer.scss'

export class Navdrawer extends Component {
  render() {
  	const {toggleNavdrawer} = this.props
	  return(
			<aside className="aside-page">
			<header>
				<h2>
					<img src="https://img3.doubanio.com/pics/cardkit/logo.png" alt="douban"/>
					<form action={'javascript:;'} onSubmit={function(){return false}}>
						<input placeholder="电影、影人、影院、电视剧" type="search" ref="searchNode"></input>
					</form>
				</h2>
			</header>
			<section>
				<div className="selection-tab">
					<span>电影</span>
				</div>
				<div>
					<ul>
						<li onClick={toggleNavdrawer}><IndexLink to="/home">热门 </IndexLink></li>
						<li onClick={toggleNavdrawer}><Link to="/Top250">Top250 </Link></li>
						<li onClick={toggleNavdrawer}><Link to="/zen">影评 </Link></li>
						<li onClick={toggleNavdrawer}><Link to="/tv">电视剧 </Link></li>
						<li onClick={toggleNavdrawer}><Link to="/elapse">分类 </Link></li>
					</ul>
				</div>
			</section>
			</aside>
	  )
  }

	componentDidMount() {
		const searchNode = this.refs.searchNode,
		 			formNode = searchNode.parentNode

		formNode.addEventListener('submit',()=>{
			console.log(searchNode.value)
			console.log(this)
			const history = this.props.history
			history.push(null, '/search/'+searchNode.value)
			return false
		})
	}
	

} 

export default Navdrawer
