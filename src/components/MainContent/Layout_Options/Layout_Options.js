import React from 'react';
import css from './Layout_Option.module.css';

class Layout_Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      iFrames: []
    };
  }
  componentDidMount() {
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&type=video&key=AIzaSyAnHlc-s-9rd8otrmRg-3slvxFp8iUfv3Y&fbclid=IwAR0y-R-Y4fTBvJJeOdNLfYiy4T9VeJjYOXDAVRJq9hfAe0JILkDLYUub0A8")
      .then(res => res.json())
      .then((result) => {this.setState({isLoaded: true, iFrames: result.items});},
        (error) => {this.setState({isLoaded: true, error});}
      )
  }
  render() {
    const { error, isLoaded, iFrames } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul className={css.layout_page}>
          {iFrames.map((item,i) => {
            return(
            <li key={i}>
              {item.items[0].id}
            </li>
            )
          }
          )}
        </ul>
      );
    }
  }
}

export default Layout_Options;
