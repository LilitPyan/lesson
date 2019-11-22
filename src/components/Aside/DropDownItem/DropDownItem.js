import React from 'react';
import {NavLink} from 'react-router-dom';
import {IoIosArrowBack, IoIosArrowDown} from "react-icons/io";

import css from './DropDownItem.module.css'

class DropDownItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayMenu: false };
    };

    showDropdownMenu = (e) => {
        e.preventDefault();
        this.setState(previous => ({ displayMenu: !previous.displayMenu }));
    };

    hideDropdownMenu = () => {
        this.setState({ displayMenu: false });
    };

    render() {
        const { displayMenu } = this.state;

        return (
            <div className = {css.aside_container}>
                <div className = {css.aside_container_link}>
                    {this.props.icon}
                    <div className = {css.aside_container_title}>
                        {this.props.title}
                    </div>
                    <p className = {css.aside_container_btn}>
                        {displayMenu ?
                            <IoIosArrowBack onClick = {this.hideDropdownMenu} /> :
                            <IoIosArrowDown onClick = {this.showDropdownMenu} />}
                    </p>
                </div>
                {displayMenu ? (
                    <ul className = {css.dropItems}>
                        <NavLink to = {this.props.link_1} className = {css.aside_container_link}>
                        <li className = {css.dropItem}>{this.props.li_1}</li>
                        </NavLink>
                        <NavLink to = {this.props.link_2} className = {css.aside_container_link}>
                        <li className = {css.dropItem}>{this.props.li_2}</li>
                        </NavLink>
                    </ul>
                ) : null}
            </div>
        )
    }
}

export default DropDownItem;
