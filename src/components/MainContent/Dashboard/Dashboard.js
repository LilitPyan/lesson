import React from 'react';
import css from './Dashboard.module.css'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      country: {},
      name: null,
      loaded: false
    };
  }

  componentDidMount(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://restcountries.eu/rest/v2/all`, true);
    xhr.send();

    let _this = this;
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4 && xhr.status !== 200) {
        return false
      } else {
        _this.setState({
          countries: JSON.parse(xhr.responseText)
        });
      }
    }
  }

  nameChange = (e) => {
    e.preventDefault();
    let name = e.target.value;
    const {countries} = this.state;
    const country = countries.find(c => c.name === name);
    this.setState({
      country,
      loaded: true
    });
  };

  render() {
    const {country, countries, loaded} = this.state;

    return (
      <div className={css.dashboards_page}>
        <div>
          <select onChange={this.nameChange}>
            {countries.map((item, i) => {
              return (
                <option key={i}>{item.name}</option>
              )
            })}
          </select>
        </div>
        {loaded &&
        <div>
          <img src={country.flag} alt='flag'/>
          <p> Name:
            <span>
              {country.name}
            </span>
          </p>
          <p> Currency:
            {country.currencies.map((currency, i) => {
              return <span key={i}>{currency.code}</span>
            })}
          </p>
        </div>
        }
      </div>
    )
  }
}

export default Dashboard;
