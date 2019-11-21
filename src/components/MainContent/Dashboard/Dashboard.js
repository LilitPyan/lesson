import React from 'react';
import css from './Dashboard.module.css'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      country: [],
      name: null
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
      }else {
        _this.setState({
          countries: JSON.parse(xhr.responseText)
        });
      }
    }
  }

  nameChange = (e) => {
    e.preventDefault();
    const country = e.target.value;
    this.setState(
        { name: country },
        () => this.setState({country: this.state.countries}));
  };

  render() {
    const { country,countries, name} = this.state;

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
      {country.map((item,i) => {
            return (
              <div key={i}>
                <img src={item.flag} alt='.'/>
                <p>Name: <span>{item.name}</span></p>
                <p>Currency:
                  {item.currencies.map((currency,i) => {
                  return <span key={i}>{currency.code}</span>
                })}
                </p>
              </div>
            )
          })}
      </div>
    )
  }
}
export default Dashboard;
