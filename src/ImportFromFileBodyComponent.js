import React from 'react';
class ImportFromFileBodyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: false
    }
  }

  getMessages = (content) => {
    var myLines = content;
    myLines = myLines.split(/([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,2}, [0-9]{1,2}:[0-9]{1,2}\s?[A-z]{0,2} - )/gm||[]).filter(e=>e);
    var messages = [];
    var senders = [];
    var words = [];
    for(var i = 0; i < myLines.length; i++) {
      var time = myLines[i].replace(/ - /, '');
      var chat = myLines[i+1] && myLines[i+1].split(/: (.+)?/);
      if (chat) {
        if(chat[1]) {
          var sender = chat[0];
          msg = chat[1].replace(/\n/g, " ");
        } else {
          sender = 'Announcement';
          var msg = chat[0].replace(/\n/g, " ");
        }
        words.push(msg.split(' '))
        i = i+1;
        messages.push({
          time, sender, msg
        });
      }
    }
    this.setState({ messages });
  }

  handleFileRead = (e) => {
    const content = this.fileReader.result.toString();
    this.getMessages(content);
    // … do something with the 'content' …
  };

  handleFileChosen = (file) => {
    this.fileReader = new FileReader();
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsText(file);
  };

  render(){
    return (
      <div className='upload-expense'>
        <input type='file'
          id='file'
          className='input-file'
          accept='.txt'
          onChange={e => this.handleFileChosen(e.target.files[0])}
        />
      </div>
    );
  }
};

export default ImportFromFileBodyComponent;