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
				<input placeholder="电影、影人、影院、电视剧"></input>
			</h2>
		</header>
		<section>
			<div className="selection-tab">
				<span>电影</span>
			</div>
			<div>
				<ul>
					<li onClick={toggleNavdrawer}><IndexLink to="/">首页</IndexLink></li>
					<li onClick={toggleNavdrawer}><Link to="/">电视剧</Link></li>
					<li onClick={toggleNavdrawer}><Link to="/">Top250</Link></li>
					<li onClick={toggleNavdrawer}><Link to="/">分类</Link></li>
					<li onClick={toggleNavdrawer}><Link to="/">影评</Link></li>
				</ul>
			</div>
		</section>
		</aside>
	  )
  }
} 

export default Navdrawer
