import React from 'react';

class Alpha2CodeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      country: {},
      alpha2Code: null,
      loaded: false
    };
  }

  componentDidMount() {
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

  languageChange = (e) => {
    e.preventDefault();
    let alpha2Code = e.target.value;
    const {countries} = this.state;
    const country = countries.find(c => c.alpha2Code === alpha2Code);
    this.setState({
      country,
      loaded: true
    });
  };

  render() {
    const {country, countries, loaded} = this.state;
    return (
      <div>
        <div>
          <select onChange={this.languageChange}>
            {countries.map((item, i) => {
              return (
                <option key={i}>{item.alpha2Code}</option>
              )
            })}
          </select>
        </div>

        {loaded &&
          <div>
            <p> Country:{country.name}</p>
            <p> Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
          </div>
        }
      </div>
    )
  }
}

export default Alpha2CodeSearch;
