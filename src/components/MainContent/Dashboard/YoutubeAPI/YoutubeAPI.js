import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import css from'./YoutubeAPI.module.css';
import Video from '../Video/Video'

class YoutubeAPI extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    videos:[],
    video:{},
    videoId:null,
    loaded:false
     }
  }

  componentDidMount(){
    let key='AIzaSyB3T1F5jvq304v5Ye4vHG07xz6rppUfzG0';
    let maxResults ='50';

    let url ='https://www.googleapis.com/youtube/v3/search?part=snippet'+
    '&maxResults='+maxResults+
    '&key='+key+
    '&fbclid=IwAR0y-R-Y4fTBvJJeOdNLfYiy4T9VeJjYOXDAVRJq9hfAe0JILkDLYUub0A8';
    fetch(url)
      .then( function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then( result => this.setState({ videos: result}))
  }

  handleChange = (e) => {
  e.preventDefault();
  let videoId = e.target.value;
  alert(videoId)
  }

  render(){
    const {videos, video, loaded} = this.state;
    console.log(this.state.videos.items);


    return (
    <div className={css.youtube_page}>
           <div className={css.page_title}>
            <span>Youtube API</span>
            </div>
            <div className={css.page_container}>
             <SearchBar onChange={this.handleChange} videos={this.state.videos}/>
             <Video/>
             </div>
     </div>
    )
  }
}

export default YoutubeAPI;
