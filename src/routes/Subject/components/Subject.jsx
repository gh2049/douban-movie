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
                  <a href="https://movie.douban.com/subject/26683290/photos?type=R" className="movie-poster-more" title="你的名字。 君の名は。">
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
            <span>剧情简介</span>
          </h2>
        </header>
 
        <section>
          <div className="summary">
            <span>千年后再度回归的彗星造访地球的一个月前，日本深山的某个乡下小镇。女高中生三叶每天都过着忧郁的生活，而她烦恼的不光有担任镇长的父亲所举行的选举运动，还有家传神社的古老习俗。三叶身居这小镇之中，又处于过多在意周围人目光的年龄，因此对大都市的憧憬日益强烈。</span>
            <br />
            <br />
            <span>然而某一天，自己做了一个变成男孩子的梦。这儿有着陌生的房间、陌生的朋友。而眼前出现的则是东京的街道。三叶虽然感到困惑，但是能够来到朝思暮想的都市生活，让她觉得神清气爽。另一方面在东京生活的男高中生立花泷也做了个奇怪的梦。他在一个从未去过的深山小镇中，变成了女高中生。两人就这样在梦中邂逅了彼此。</span>
          </div>
        </section>

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
                <span>新海诚</span>
            </div>
            <div className="actor-wrap fl text-center">
              <div  className="text-center">
                  <img src="http://img3.doubanio.com/img/celebrity/medium/1118.jpg" alt=""/>
                </div>
                <span>新海诚</span>
            </div>
            <div className="actor-wrap fl text-center">
              <div  className="text-center">
                  <img src="http://img3.doubanio.com/img/celebrity/medium/1118.jpg" alt=""/>
                </div>
                <span>新海诚</span>
            </div>
        </section>

      </div>
          
    );
  }
}

export default Subject;