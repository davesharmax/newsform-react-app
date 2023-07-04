import React, { Component } from 'react'
import NewsTtem from './NewsTtem'

export class News extends Component {

    constructor(){
        super();
        this.state={
            articles : [],
            loading: false

        }
    }
    async componentDidMount(){
        
        let url ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9c042074c72843b49daa6784ab0cb2a4"
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: parsedata.articles
        })
    }
    handelPrevClick= async ()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9c042074c72843b49daa6784ab0cb2a4&page=${this.state.page -1}`
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            page: this.state.page -1,
            articles: parsedata.articles
        })



    }
    handelNextClick= async ()=>{
        
        let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9c042074c72843b49daa6784ab0cb2a4&page=${this.state.page +1}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            page: this.state.page +1,
            articles: parsedata.articles
        })

    }

  render() {
    return (
      <div className='container my-3'>
        <h2>Newsform - Top Headlines</h2>
        {this.state.articles.map((element)=> {})}
        <div className="row">
          {this.state.articles.map((element)=> {
                return  <div className="col-md-4 my-2">
                        <NewsTtem key = {element.url} title = {element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88): ""} imgUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
          })}              <div className="col-md-4">
            <NewsTtem tytle = "myTitle" description="mydesc" imgUrl="" newsUrl="toso"/>
            </div>

        </div>
        <div className='container d-flex justify-content-between my-3'>
            <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handelPrevClick}>&larr; Prev</button>
            <button type="button" class="btn btn-dark" onClick={this.handelNextClick}>Next &rarr;</button>
        </div>


      </div>
    )
  }
}

export default News
