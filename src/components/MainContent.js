import React, { Component } from 'react';
import ArticleContent from './ArticleContent';
import hashCode from '../utils';

class MainContent extends Component {

    renderArticles() {
        return (
            <ul>
                {Object.entries(this.props.articles)
                    .filter(item => { return this.props.selectedSource === 'All' || item[0] === this.props.selectedSource })
                    .map(item => {
                        return item[1].map(art => {
                            return <ArticleContent
                                key={hashCode(item[0] + art.title)}
                                title={art.title}
                                description={art.description}
                                url={art.url}
                            />
                        })
                    })}
            </ul>
        )
    }

    render() {
        return (
            <div className="main-content">
                {this.renderArticles()}
            </div>
        )
    }
}

export default MainContent;