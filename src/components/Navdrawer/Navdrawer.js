import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import './Navdrawer.scss'

export class Navdrawer extends Component {
	render() {
		const {toggleNavdrawer} = this.props
		return (
			<aside className="aside-page">
				<header>
					<h2>
						<img src="https://img3.doubanio.com/pics/cardkit/logo.png" alt="douban" />
						<form action={'javascript:;'} onSubmit={function () { return false } }>
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
							<li onClick={toggleNavdrawer}><IndexLink to="/home">正在上映 </IndexLink></li>
							<li onClick={toggleNavdrawer}><Link to="/coming">即将上映</Link></li>
							<li onClick={toggleNavdrawer}><Link to="/top250">Top250 </Link></li>
							<li onClick={toggleNavdrawer}><Link to="/celebrity/123">celebrity </Link></li>							
							<li onClick={toggleNavdrawer}><Link to="/subject/233">subject </Link></li>
						</ul>
					</div>
				</section>
			</aside>
		) 
	}

	componentDidMount() {
		const searchNode = this.refs.searchNode,
			formNode = searchNode.parentNode

		formNode.addEventListener('submit', () => {
			const history = this.props.history
			history.push('/search/' + searchNode.value)
			this.props.toggleNavdrawer()
			// it warns that 'props.history' and 'context.history' are deprecated
			// and recommands the 'context.router'
			// so use another function as below
			// this._reactInternalInstance._context.router.push('/zen')
			return false
		})
	}
}

export default Navdrawer
