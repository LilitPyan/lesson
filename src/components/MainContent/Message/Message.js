import React from "react";
import css from './Messages.module.css';
import icon from './icon.png'

function Message(props){
  const messages = props.messages;

  const itemList = messages.map(item => {
      return (
        <div key={item.key} className={css.item}>
          <img src={icon} className={css.icon} alt=''/>
          <span className={css.name}>Lilit</span>
          <p className={css.text}>{item.text}</p>
        </div>
      )
  });

  return (
    <div className={css.list_item}>{itemList}</div>
  )
}
export default Message;