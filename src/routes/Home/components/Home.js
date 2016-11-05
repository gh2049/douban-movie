import React,{Component} from 'react'
import './Home.scss'
import jpg1 from './assets/1.jpg'
import jpg2 from './assets/2.jpg'
import jpg3 from './assets/3.jpg'
import { IndexLink, Link } from 'react-router'

export default class Home extends Component {
  componentWillMount() {
    const {fetchHome,Home} = this.props

    //fetchHome()
    console.log(this.props)
  }
  
  render() {
    return (
      <div className="wrapper">
        
        <div className="banner-unit"></div>
        
        <section className="list-unit hot-movies">
          
          <header className="title-wrap">
            <h2>
              <a href="#"></a>
              <span>正在热映</span>
            </h2>
          </header>
            
          <article className="unit-wrap">
            <div className="list-wrap">
              <div className="item">
                <a href="#"></a>
                <div className="title-box">
                  <span>
                    <img src={jpg1} alt=""/>
                  </span>
                  <div className="title-set">
                    <div>
                      <span>但丁密码</span>
                    </div>
                    <div data-rating="70" className="rating-stars">
                      <span className="rating-star rating-star-small-full"></span>
                      <span className="rating-star rating-star-small-full"></span>
                      <span className="rating-star rating-star-small-full"></span>
                      <span className="rating-star rating-star-small-half"></span>
                      <span className="rating-star rating-star-small-grey"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="#"></a>
                <div className="title-box">
                  <span>
                    <img src={jpg2} alt=""/>
                  </span>
                  <div className="title-set">
                    <div>
                      <span>但丁密码</span>
                    </div>
                    <div data-rating="70" className="rating-stars">
                      <span className="rating-star rating-star-small-full"></span>
                      <span className="rating-star rating-star-small-full"></span>
                      <span className="rating-star rating-star-small-full"></span>
                      <span className="rating-star rating-star-small-half"></span>
                      <span className="rating-star rating-star-small-grey"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="#"></a>
                <div className="title-box">
                  <span>
                    <img src={jpg3} alt=""/>
                  </span>
                  <div className="title-set">
                    <div>
                      <span>但丁密码</span>
                    </div>
                    <div data-rating="70" className="rating-stars">
                      <span className="rating-star rating-star-small-full"></span>
                      <span className="rating-star rating-star-small-full"></span>
                      <span className="rating-star rating-star-small-full"></span>
                      <span className="rating-star rating-star-small-half"></span>
                      <span className="rating-star rating-star-small-grey"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <IndexLink to='/zen'>
            Zen 
          </IndexLink>
            
        </section>
      </div>
    )
  }
}

