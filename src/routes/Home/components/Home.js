import React,{Component} from 'react'
import './Home.scss'
import './Home1.scss'
import jpg1 from './assets/1.jpg'
import jpg2 from './assets/2.jpg'
import jpg3 from './assets/3.jpg'
import { IndexLink, Link } from 'react-router'

export default class Home extends Component {
  componentWillMount() {
    const {fetchHome,home} = this.props

    if(home.getValue) return
    
    fetchHome()
  }
  render() {
    const {home} = this.props
    if(!home.getValue) return (<div>fetching</div>)
    return (
      <div className="wrapper">
        <div className="banner-unit"></div>
        <section className="list-unit hot-movies">
          
          <header className="title-wrap">
            <h2>
              <a href="#"></a>
              <span>豆瓣全部新片</span>
            </h2>
          </header>
            
          <article className="unit-wrap">
            <div className="list-wrap">
              <div className="hot-item">
                <a href="#"></a>
                <div className="item-box">
                  <span className="item-img">
                    <img src={jpg1} alt=""/>
                  </span>
                  <div className="title-set">
                    <div className="title-content">
                      <span>假如蜗牛有爱情/</span>
                      <span>when a snail fails in love/ when a snail fails in love</span>
                    </div>
                  </div>
                  <div className="content-wrap">
                      <p className="pl-content">2016-10-24(中国大陆) / 王凯 / 王子文 / 徐悦 / 于恒 / 赵圆瑗 / 武笑羽 / 张棪琰 / 张晓谦 / 蒋冰 / 霍亚明 / 焦体怡 / 江森 / 张陆 / 李龙君 / 王禹铮 / 张野 / 米特 / 李培铭 / 蔡珩 / 谭希和 / 王永强 / 延翔 / 中国大陆 / 张开宙 / 34分钟 / 剧情...</p>
                    </div>              
                </div>
              </div>
            </div>
          </article>

          <article className="unit-wrap">
            <div className="list-wrap">
              <div className="hot-item">
                <a href="#"></a>
                <div className="item-box">
                  <span className="item-img">
                    <img src={jpg1} alt=""/>
                  </span>
                  <div className="title-set">
                    <div className="title-content">
                      <span>假如蜗牛有爱情/</span>
                      <span>when a snail fails in love/ when a snail fails in love</span>
                    </div>
                  </div>
                  <div className="content-wrap">
                      <p className="pl-content">2016-10-24(中国大陆) / 王凯 / 王子文 / 徐悦 / 于恒 / 赵圆瑗 / 武笑羽 / 张棪琰 / 张晓谦 / 蒋冰 / 霍亚明 / 焦体怡 / 江森 / 张陆 / 李龙君 / 王禹铮 / 张野 / 米特 / 李培铭 / 蔡珩 / 谭希和 / 王永强 / 延翔 / 中国大陆 / 张开宙 / 34分钟 / 剧情...</p>
                    </div>              
                </div>
              </div>

            </div>
          </article>
        </section>
      </div>
    )
  }
  
  componentWillReceiveProps(nextProps) {
    //console.log('componentWillReceiveProps',nextProps)
  }
  componentWillUpdate(nextProps, nextState) {
    //console.log('componentWillUpdate',nextProps)
    //console.log('componentWillUpdate',nextState)  
  }
}
