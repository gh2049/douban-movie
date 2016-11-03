import React,{Component} from 'react'
import './Navdrawer.scss'

export class Navdrawer extends Component {
  render() {
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
	    				<li>首页</li>
	    				<li>电视剧</li>
	    				<li>排行榜</li>
	    				<li>分类</li>
	    				<li>影评</li>
	    			</ul>
	    		</div>
		    </section>
		  </aside>
	  )
  }
} 

export default Navdrawer
