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
    
    fetchHome.call(null)
  }
  render() {
    const {home} = this.props
    let subjectArr = []

    if(!home.getValue) return (<div>fetching</div>)
    
    const subjects = home.text.subjects

    const getActor = function() {
      return this.casts.map((cast,index) => {
        return cast.name + ' / '
      })
    }

    subjectArr = subjects.map((subject,index) => {
      return (          
        <article className="unit-wrap">
            <div className="list-wrap">
              <div className="hot-item">
                <a href="#"></a>
                <div className="item-box">
                  <span className="item-img">
                    <img src={subject.images.medium} alt={subject.title}/>
                  </span>
                  <div className="title-set">
                    <div className="title-content">
                      <span>{subject.title}</span>
                      <span> {subject.title === subject.original_title 
                        ? ""
                        : "/ " + subject.original_title}</span>
                    </div>
                  </div>
                  <div className="content-wrap">
                      <p className="pl-content">
                      {subject.year}
                      {getActor.call(subject)}</p>
                      <div>
                          评分 ： {subject.rating.average}
                      </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </article>
      )
    })

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
          {subjectArr}
          
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
