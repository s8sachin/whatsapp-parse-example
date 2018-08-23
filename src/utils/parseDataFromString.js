export default async (fileContent) => {
  const stopWords = ["a", "am", "an", "and", "are", "as", "at", "be", "by", "for", "from", "how", "i", "im", "in", "is", "it", "not", "of", "on", "or", "that", "the", "this", "to", "was", "what", "when", "where", "who", "will", "with", "<Media", "omitted>"];
  var myLines = fileContent;
  myLines = myLines.split(/([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,2}, [0-9]{1,2}:[0-9]{1,2}\s?[A-z]{0,2} - )/gm||[]).filter(e=>e);
  var messages = [];
  var words = [];
  for(var i = 0; i < myLines.length; i++) {
    var time = myLines[i].replace(/ - /, '');
    var chat = myLines[i+1] && myLines[i+1].split(/: (.+)?/);
    var msg;
    if (chat) {
      if(chat[1]) {
        var sender = chat[0];
        msg = chat[1].replace(/\n/g, " ");
      } else {
        sender = 'Announcement';
        msg = chat[0].replace(/\n/g, " ");
      }
      words.push(msg.split(' '))
      i = i+1;
      messages.push({
        time, sender, msg
      });
    }
  }
  words = [].concat.apply([], words)
  var wordcount = {}
  words.forEach(word => {
    wordcount[word] = wordcount[word] ? wordcount[word] + 1 : 1;
  })
  var sortable = [];
  for (var word in wordcount) {
    if (!stopWords.includes(word)){
      sortable.push({text: word, value: wordcount[word]});
    }
  }
  var sorted = sortable.sort((a,b)=> {
    return b.value - a.value;
  })
  sorted = sorted.splice(0, 1000);
  return sorted;
}
