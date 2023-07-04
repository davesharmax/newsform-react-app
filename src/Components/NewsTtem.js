import React, { Component } from "react";

export class NewsTtem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn byn-sm btn-dark btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsTtem;
