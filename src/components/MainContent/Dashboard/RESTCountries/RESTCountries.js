import React from 'react';
import AllSearch from "../AllSearch/AllSearch";
import Alpha2CodeSearch from "../Alpha2CodeSearch/Alpha2CodeSearch";
import css from './RESTCountries.module.css';

class RESTCountries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.page}>
        <span className={css.page_name}> REST Countries </span>
        <p> Below are described the REST endpoints available that you can use to search for countries using https://restcountries.eu/rest/v2/all link </p>
       <hr/>
        <p> Example 1: Search by the all information:  </p>
        <AllSearch/>
        <hr/>
        <p> Example 2: Search by country aplha2Code: </p>
        <Alpha2CodeSearch/>
      </div>
    )
  }
}

export default RESTCountries;