import React, { Component } from 'react';
import ArticleSourceItem from './ArticleSourceItem'

class SideBar extends Component {

    renderSources() {
        return (
            <ul>
                {this.props.sources.map((source) => {
                    return <ArticleSourceItem
                        key={source}
                        source={source}
                        onClick={this.props.onClick}
                    />
                })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="article-source">
                {this.renderSources()}
            </div>
        )
    }
}

export default SideBar;
