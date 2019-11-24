import React from 'react';
import css from '../SearchBar/SearchBar.module.css'

class YoutubeAPI extends React.Component{
  constructor(props){
    super(props);
    this.state = { videos:[] }
  }

  componentDidMount(){
    let url ='https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&type=video&key=AIzaSyAnHlc-s-9rd8otrmRg-3slvxFp8iUfv3Y&fbclid=IwAR0y-R-Y4fTBvJJeOdNLfYiy4T9VeJjYOXDAVRJq9hfAe0JILkDLYUub0A8';
    fetch(url)
      .then( function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then( result => this.setState({ videos: result}))
  }

  render(){
const {videos} = this.state;
    console.log(this.state.videos);

    return (
             <div className={css.search_item}>
               <form>
                 <input
                   placeholder='Search video'
                   type='text'
                   name='search'
                 />
               </form>
             </div>
    )
  }
}

export default YoutubeAPI;
