import React, { Component } from 'react';
import './Subject.scss';

class Subject extends Component {
  render() {
    return (
      <div className="cbox-wrap">
        <div className="cbox-unit">
            <article className="subject-wrap">
              <section>
                <div className="subject">
                  <a href="https://movie.douban.com/subject/26683290/photos?type=R" className="movie-poster-more content" title="你的名字。 君の名は。">
                    <img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2395733377.jpg"/>
                  </a>
                  <h1 className="content">你的名字。 君の名は。</h1>
                  <a className="content" href="/subject/26683290/collections">
                      <span className="rating-stars" >
                        <span className="rating-star rating-star-medium-full"></span>
                        <span className="rating-star rating-star-medium-full"></span>
                        <span className="rating-star rating-star-medium-full"></span>
                        <span className="rating-star rating-star-medium-full"></span>
                        <span className="rating-star rating-star-medium-half"></span>
                      </span>
                      <span className="rating_num">8.9 </span>
                  </a>
                  <p className="rating-member content">
                      <a href="collections" className=" ck-link"><span>64468 </span> 人评价</a>
                  </p>
                  <p className="content">
                    <a href="/celebrity/1005177/" rel="v:directedBy">新海诚(导演)</a> /
                    <a href="/celebrity/1185637/" rel="v:starring">神木隆之介</a> / 
                    <a href="/celebrity/1316660/" rel="v:starring">上白石萌音</a> / 
                    <a href="/celebrity/1018667/" rel="v:starring">长泽雅美</a>
                    <br/>
                    类型：<span>剧情</span> / <span>爱情</span> / <span>动画</span>
                    <br/>
                    <span>2016-12-02</span>上映
                  </p>
                </div>   
              </section>
            </article>
          </div>
          
          <header className="title-wrap">
            <h2>
              <a href="#"></a>
              <span>演职员表</span>
            </h2>
          </header>
          
          <section className="clearfix">
              <div className="actor-wrap fl text-center">
                <div className="text-center">
                  <img src="http://img3.doubanio.com/img/celebrity/medium/1118.jpg" alt=""/>
                </div>
                <span>新海诚</span><span>（导演）</span>
              </div>
              <div className="actor-wrap fl text-center">
                <div  className="text-center">
                    <img src="http://img3.doubanio.com/img/celebrity/medium/1118.jpg" alt=""/>
                  </div>
                  <span>新海诚</span><span>（导演）</span>
              </div>
              <div className="actor-wrap fl text-center">
                <div  className="text-center">
                    <img src="http://img3.doubanio.com/img/celebrity/medium/1118.jpg" alt=""/>
                  </div>
                  <span>新海诚</span><span>（导演）</span>
              </div>
              <div className="actor-wrap fl text-center">
                <div  className="text-center">
                    <img src="http://img3.doubanio.com/img/celebrity/medium/1118.jpg" alt=""/>
                  </div>
                  <span>新海诚</span><span>（导演）</span>
              </div>
          </section>

      </div>
          
    );
  }
}

export default Subject;