import React, { Component, Suspense, lazy } from "react";

import Header from "./components/header/Header";

import gif from "./assets/gif.gif";

import "./App.css";

const Albums = lazy(() => import("./components/albums/Albums"));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount = () => {
    fetch("https://itunes.apple.com/in/rss/topalbums/limit=50/json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data.feed.entry });
      })
      .then((err) => {
        return err;
      });
  };

  render() {
    const loading = (
      <div className="loading">
        <img className="gif" src={gif} alt="Loading" />
      </div>
    );

    const { posts } = this.state;

    const albums = posts.map((post) => {
      return (
        <Suspense key={post.id.label} fallback={loading}>
          <Albums
            img={post["im:image"][2].label}
            title={post.title.label}
            link={post.id.label}
            date={post["im:releaseDate"].label}
          />
        </Suspense>
      );
    });
    return (
      <React.Fragment>
        <Header />
        <div className="albums">{albums}</div>
      </React.Fragment>
    );
  }
}

export default App;
