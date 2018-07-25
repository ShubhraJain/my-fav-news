import React, { Component } from 'react';
// import data from '../data/hackerNews.json';
import SideBar from './SideBar';
import MainContent from './MainContent';
import newsSources from '../lib/allSources';
import axios from 'axios';
import key from '../lib/apiKey';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: {},
      selectedSource: 'All'
    }
  }

  componentDidMount() {
    this.loadNews();
  }
  
  loadNews() {
    newsSources.map( (source) => {
      axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`)
        .then( res => {
          let newArticles = Object.assign({}, this.state.articles);
          let srcName = res.data.articles[0].source.name;
          newArticles[srcName] = res.data.articles;
          this.setState({
            articles: newArticles
          });
        });
    });
  }

  onSourceClick = (src) => {
    console.log(this)
    this.setState({
      selectedSource: src
    });
  }

  render() {
    return (
      <div className="container">
        <SideBar 
          sources={Object.keys(this.state.articles)} 
          onClick={this.onSourceClick}
        />
        <MainContent 
          articles={this.state.articles} 
          selectedSource={this.state.selectedSource}
        />
      </div>
    )
  }
}

export default App;
