import React from 'react';
import css from './Dashboard.module.css'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: []
    };
  }

  render() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://restcountries.eu/rest/v2/all?fields=flag;name;language;currencies\n`, false);
    xhr.send(JSON.stringify(xhr.responseText));
    xhr.onreadystatechange = function() {
      if (xhr.status != 200) {
        this.setState({country: xhr.responseText})
      }
    };

    return (
      <div className={css.dashboards_page}>
        <div>
          <form className={css.form}>
            <input type='text' name='country'/>
            <button type='submit'>Find</button>
          </form>
        </div>
        <div>
          <img src={this.state.country.flag} alt='error'/>
          <p>Name: <span>{this.state.country.name}</span></p>
          <p>Language: <span>{this.state.country.language}</span></p>
          <p>Currency: <span>{this.state.country.currencies}</span></p>
        </div>
      </div>
    )
  }
}

export default Dashboard;
