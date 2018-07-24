import React, {Component} from 'react';

class ArticleContent extends Component {
    render() {
        return(
            <div className="article">
                <h2><a className="title" href={this.props.url}>{this.props.title}</a></h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default ArticleContent;