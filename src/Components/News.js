import React, { Component } from 'react';
import NewsTtem from './NewsTtem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 5,
    category: 'health'
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category : PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    await this.fetchArticles();
  }

  async fetchArticles() {
    const { page } = this.state;
    const { country, pagesize } = this.props;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${this.props.category}&apikey=9c042074c72843b49daa6784ab0cb2a4&page=${page}&pagesize=${pagesize}`;
    this.setState({ loading: true });
    const response = await fetch(url);
    const parsedata = await response.json();
    this.setState({
      articles: parsedata.articles,
      loading: false,
      totalResults: parsedata.totalResults,
    });
  }

  handelPrevClick = async () => {
    const { page } = this.state;
    if (page > 1) {
      this.setState({ page: page - 1 });
      await this.fetchArticles();
    }
  };

  handelNextClick = async () => {
    const { page, totalResults } = this.state;
    const { pagesize } = this.props;
    const totalPages = Math.ceil(totalResults / pagesize);
    if (page + 1 <= totalPages) {
      this.setState({ page: page + 1 });
      await this.fetchArticles();
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center " style={{margin: '20px 20px'}}>Newsform - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-2" key={element.url}>
                <NewsTtem
                  title={element.title ? element.title.slice(0, 44) : ''}
                  description={element.description ? element.description.slice(0, 88) : ''}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handelPrevClick}
          >
            &larr; Prev
          </button>
          <button
            type="button"
            disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pagesize)}
            className="btn btn-dark"
            onClick={this.handelNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
