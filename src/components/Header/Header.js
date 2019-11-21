import React from 'react';
import css from './Header.module.css'
import {FiMenu} from 'react-icons/fi';

  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visible:false
      };
    };

    menuButton = (e) => {
      e.preventDefault();
      this.setState({
        visible: !this.state.visible
      })
    };

    render() {
      return (
        <div className={css.app_header}>
          {this.state.visible ? <span className={css.site_name}>AdminLTE</span> : null}
          <button className={css.menu_btn} >
            <FiMenu onClick={this.menuButton}/>
          </button>
        </div>
      )
    }
}
export default Header;
