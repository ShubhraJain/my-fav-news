import React, { Component } from 'react';

class ArticleSourceItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.onClick(event.target.innerHTML)
    }

    render() {
        return (
            <li className="source-name" onClick={this.handleClick}>
                {this.props.source}
            </li>
        )
    }
}

export default ArticleSourceItem;