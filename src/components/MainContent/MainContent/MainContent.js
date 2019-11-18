import React from 'react';
import Message from "../Message/Message";
import css from './MainContent.module.css'

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: {
        text:'',
        key:''
      }
    };
  }

  onChange = (e) => {
    this.setState({
      newMessage: {
        text: e.target.value,
        key: Date.now()
      }
    })
  };

  addMessage = (e) => {
    e.preventDefault();
    const item = this.state.newMessage;
    this.setState({
      messages: [item,...this.state.messages],
      newMessage:{
        text:'',
        key:''
      }
    });
  };

  render() {
    return (
      <div className={css.main_container}>
        <form onSubmit={this.addMessage} className={css.form}>
          <input type='text'
                 name='message'
                 value={this.state.newMessage.text}
                 onChange={this.onChange}/>
          <button type='submit'>
            Add
          </button>
        </form>
         <div>
           <Message messages={this.state.messages}></Message>
        </div>
      </div>
    )
  }
}

export default MainContent;
