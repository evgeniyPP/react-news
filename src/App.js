import React from "react";
import { Add } from "./components/Add";
import { News } from "./components/News";
import "./App.css";

class App extends React.Component {
  state = {
    news: null,
    isLoading: false
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3000/data/newsData.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ isLoading: false, news: data });
      });
  }
  handleAddNews = data => {
    const nextNews = [...this.state.news, data];
    this.setState({ news: nextNews });
  };
  render() {
    const { news, isLoading } = this.state;

    return (
      <div className="wrapper">
        <div>
          <h1>Новости на React</h1>
          {isLoading && <p>Загружаю...</p>}
          {Array.isArray(news) && <News data={news} />}
          <Add onAddNews={this.handleAddNews} />
        </div>
      </div>
    );
  }
}

export default App;
