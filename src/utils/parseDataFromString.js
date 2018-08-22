export default async (fileContent) => {
  var myLines = fileContent;
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
  return messages;
}
