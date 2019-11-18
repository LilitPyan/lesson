import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaChartPie, FaGalacticRepublic} from 'react-icons/fa';
import {IoIosArrowBack, IoIosArrowDown, IoIosCopy, IoIosKeypad, IoMdDesktop,} from "react-icons/io";

import css from './Aside.module.css'

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
    };
  };

  showDropdownMenu = (e) => {
    e.preventDefault();
    this.setState({displayMenu: true}, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  };

  hideDropdownMenu = () => {
    this.setState({displayMenu: false}, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  };

  render() {
    return (
      <nav className={css.app_aside}>
        <div className={css.app_link_container}>
          <NavLink to="/dashboard" className={css.link_item}>
            <FaGalacticRepublic/>
            <div className={css.menu_item}>Dashboard</div>
            <p className={css.name}>
              {this.state.displayMenu ? <IoIosArrowBack/> : <IoIosArrowDown onClick={this.showDropdownMenu}/>}
            </p>
          </NavLink>
          {this.state.displayMenu ? (
            <ul>
              <li>Dashboard v1</li>
              <li>Dashboard v2</li>
            </ul>
          ) : null}
        </div>
        <div className={css.app_link_container}>
          <NavLink to="/layout_options" className={css.link_item}>
            <IoIosCopy/>
            <div className={css.menu_item}> Layout Options</div>
            <p className={css.name}>
              {this.state.displayMenu ? <IoIosArrowBack/> : <IoIosArrowDown onClick={this.showDropdownMenu}/>}
            </p>
          </NavLink>
          {this.state.displayMenu ? (
            <ul>
              <li>v1</li>
              <li>v2</li>
            </ul>
          ) : null}
        </div>
        <div className={css.app_link_container}>
          <NavLink to="/widgets" className={css.link_item}>
            <IoIosKeypad/>
            <div className={css.menu_item}> Widgets</div>
            <p className={css.name}>
              {this.state.displayMenu ? <IoIosArrowBack/> : <IoIosArrowDown onClick={this.showDropdownMenu}/>}
            </p>
          </NavLink>
          {this.state.displayMenu ? (
            <ul>
              <li>v1</li>
              <li>v2</li>
            </ul>
          ) : null}
        </div>
        <div className={css.app_link_container}>
          <NavLink to="/charts" className={css.link_item}>
            <FaChartPie/>
            <div className={css.menu_item}>Charts</div>
            <p className={css.name}>
              {this.state.displayMenu ? <IoIosArrowBack/> : <IoIosArrowDown onClick={this.showDropdownMenu}/>}
            </p>
          </NavLink>
          {this.state.displayMenu ? (
            <ul>
              <li>v1</li>
              <li>v2</li>
            </ul>
          ) : null}
        </div>
        <div className={css.app_link_container}>
          <NavLink to="/ui_elements" className={css.link_item}>
            <IoMdDesktop/>
            <div className={css.menu_item}>UI Elements</div>
            <p className={css.name}>
              {this.state.displayMenu ? <IoIosArrowBack/> : <IoIosArrowDown onClick={this.showDropdownMenu}/>}
            </p>
          </NavLink>
          {this.state.displayMenu ? (
            <ul>
              <li>v1</li>
              <li>v2</li>
            </ul>
          ) : null}
        </div>
      </nav>
    )
  }
}

export default Aside;
