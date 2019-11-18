import React from 'react';
import css from './Header.module.css'
import {FiMenu} from 'react-icons/fi';

  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sideBar: false,
      };
    };

    showMenu = (e) => {
      e.preventDefault();
      this.setState({sidebar: true}, () => {
        document.addEventListener('click', this.hideMenu);
      });
    };

    hideMenu = () => {
      this.setState({sidebar: false}, () => {
        document.removeEventListener('click', this.hideMenu);
      });
    };
    render() {
      return (
        <div className={css.app_header}>
          <span className={css.site_name}>AdminLTE</span>
          <button className={css.menu_btn} >
            <FiMenu onClick={this.showDropdownMenu}/>
          </button>
        </div>
      )
    }
}
export default Header;
