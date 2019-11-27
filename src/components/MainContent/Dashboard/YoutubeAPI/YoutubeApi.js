import React from 'react';
import {FaSearch} from 'react-icons/fa';

import css from './YoutubeAPI.module.css';

class YoutubeAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      defVideos: [],
      title: '',
      isLoading: false
    }
  }

  //we get videoIds and put them into the defVideos, after we render them in div(className={css.search_video_item})
  componentDidMount() {
    const key = 'AIzaSyB3T1F5jvq304v5Ye4vHG07xz6rppUfzG0';
    const result = 4;
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&key=${key}`;

    fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((result) => {
        const defVideos = result.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        this.setState({defVideos});
      });
  }

  getInfo(name) {
    const key = 'AIzaSyB3T1F5jvq304v5Ye4vHG07xz6rppUfzG0';
    const result = 4;
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&key=${key}&q=${name}`;

    fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((result) => {
        const videos = result.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        this.setState({videos, isLoading: true});
      });
  }

  //we get videoTitle from user input result and set title initial state
  handleChange = (e) => {
    e.preventDefault();
    let videoTitle = e.target.value;
    this.setState({title: videoTitle})
  };

  //we call getInfo function with it's argument we have got from the result of handleChange function
  handleClick = (e) => {
    e.preventDefault();
    let _this = this;
    this.getInfo(_this.state.title);
  };

  render() {
    return (
      <div className={css.youtube_page}>
        <div className={css.page_title}>
          <span>Youtube API</span>
        </div>
        <div className={css.page_container}>
          <div className={css.search_item}>
            <input placeholder='Search video' type='text' onChange={this.handleChange}/>
            <button onClick={this.handleClick} className={css.form_btn}>
              <FaSearch className={css.form_icon}/>
            </button>
            <div className={css.video_item}>
              <iframe src={this.state.videos[0]} height='284' width='339'></iframe>
            </div>
            <div className={css.search_video_item}>
              {this.state.defVideos.map((link, i) => {
                let frame = <div className={css.vItem}>
                  <iframe src={link} key={i} hight='220' width='270'></iframe>
                </div>;
                return frame;
              })}
              {this.frame}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default YoutubeAPI;
