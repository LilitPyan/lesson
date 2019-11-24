import React from 'react';
import {FaChartPie, FaGalacticRepublic} from 'react-icons/fa';
import {IoIosCopy, IoIosKeypad, IoMdDesktop} from "react-icons/io";
import {FiMenu} from 'react-icons/fi';
import DropDownItem from "./DropDownItem/DropDownItem";
import IconMenu from "./IconMenu/IconMenu";

import css from './Aside.module.css'

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
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
      <>
        {this.state.visible ?
          <nav className={css.app_aside}>
            <div className={css.app_header}>
              <span className={css.site_name}>AdminLTE</span>
              <button className={css.menu_btn}>
                <FiMenu onClick={this.menuButton}/>
              </button>
            </div>
            <DropDownItem
              icon={<FaGalacticRepublic/>}
              title={'Dashboard'}
              link_1={'/rest_countries'}
              link_2={'/youtube_api'}
              li_1={'REST Countries'}
              li_2={'YouTube API'}
            />
            <DropDownItem
              icon={<IoIosCopy/>}
              title={'Layout Options'}
              link={'/layout_options'}
              li_1={'c'}
              li_2={'d'}
            />
            <DropDownItem
              icon={<IoIosKeypad/>}
              title={'Widgets'}
              link={'/widgets'}
              li_1={'e'}
              li_2={'f'}
            />
            <DropDownItem
              icon={<FaChartPie/>}
              title={'Charts'}
              link={'/charts'}
              li_1={'g'}
              li_2={'h'}
            />
            <DropDownItem
              icon={<IoMdDesktop/>}
              title={'UI Elements'}
              link={'/ui_elements'}
              li_1={'i'}
              li_2={'k'}
            />
          </nav> :
          <nav className={css.icon_aside}>
            <div className={css.app_header}>
              <button className={css.menu_btn}>
                <FiMenu onClick={this.menuButton}/>
              </button>
            </div>
              <IconMenu icon={<FaGalacticRepublic/>}/>
              <IconMenu icon={<IoIosCopy/>}/>
              <IconMenu icon={<IoIosKeypad/>}/>
              <IconMenu icon={<FaChartPie/>}/>
              <IconMenu icon={<IoMdDesktop/>}/>
          </nav>
        }
      </>
    )
  }
}

export default Aside;
