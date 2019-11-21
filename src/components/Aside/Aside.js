import React from 'react';
import {FaChartPie, FaGalacticRepublic} from 'react-icons/fa';
import {IoIosCopy, IoIosKeypad, IoMdDesktop} from "react-icons/io";
import DropDownItem from "./DropDownItem/DropDownItem";

import css from './Aside.module.css'

class Aside extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
          <>
              <nav className={css.app_aside}>
                  <DropDownItem
                    icon={<FaGalacticRepublic/>}
                    title={'Dashboard'}
                    link={'/dashboard'}
                    li_1={'a'}
                    li_2={'b'}
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
              </nav>
       </>
        )
    }
}

export default Aside;
