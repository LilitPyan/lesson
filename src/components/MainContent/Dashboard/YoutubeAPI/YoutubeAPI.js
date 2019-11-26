import React from 'react';
import css from'./YoutubeAPI.module.css';
import {FaSearch} from 'react-icons/fa'

class YoutubeAPI extends React.Component{
  constructor(props){
     super(props);
     this.state = {
        videos: [],
        videoItem:{},
        title: null,
        isLoading: false
     }
  }

  componentDidMount(){
    let url ='https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyB3T1F5jvq304v5Ye4vHG07xz6rppUfzG0';

    fetch(url)
      .then( function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then( result => this.setState({ videos: result, isLoading: true}))

  }

  handleChange = (e) => {
     e.preventDefault();
     let videoTitle = e.target.value;
     this.setState({
         title: videoTitle
     })

  }

  handleClick = (title) => {
     const video = this.state.videos.find( title => title == title);
     this.setState({
         isLoading: true
     })
  }

  render(){
    const {videos, video, isLoading} = this.state;
    console.log(this.state.videos.items)
    console.log(this.state.title)

    return (
      <div className={css.youtube_page}>
        <div className={css.page_title}>
          <span>Youtube API</span>
        </div>
        <div className={css.page_container}>
        <div className={css.search_item}>
           <form>
              <input placeholder='Search video' type='text' onChange={this.handleChange}/>
              <button onClick={this.handleClick} className={css.form_btn}>
                  <FaSearch className={css.form_icon}/>
              </button>
              <div className={css.video_item}>
                 {isLoading && <div>{video}</div>}
              </div>
           </form>
           </div>
        </div>
      </div>
    )
  }
}

export default YoutubeAPI;
