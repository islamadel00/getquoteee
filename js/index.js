var quotes = [
  {
    text: `Be yourself ; everyone else is already taken.`,
    author: ` Oscar Wilde`,
  },
  {
    text: `Live as if you were to die tomorrow. Learn as if you were to live forever.`,
    author: ` Mahatma Gandhi`,
  },
  { text: `So many books, so little time.`, author: `Frank Zappa` },
  {
    text: `A room without books is like a body without a soul.`,
    author: `Marcus Tullius Cicero`,
  },
  {
    text: `You only live once, but if you do it right, once is enough.`,
    author: ` Mae West`,
  },
  {
    text: `YIf you tell the truth, you don't have to remember anything.`,
    author: ` Mark Twain`,
  },
  {
    text: `We accept the love we think we deserve.`,
    author: ` Stephen Chbosky`,
  },
  {
    text: `Without music, life would be a mistake.`,
    author: ` Friedrich Nietzsche`,
  },
  {
    text: `If you tell the truth, you don't have to remember anything.`,
    author: `Mark Twain`,
  },
];
 var index;
    var lastIndex= null;
function getQuote() {
      
    do{
     index=Math.floor(Math.random()*quotes.length);
    }while(lastIndex == index);
    lastIndex=index;
    console.log(index);
    document.getElementById("quote").innerHTML= quotes[index].text;
    document.getElementById("author").innerHTML= quotes[index].author;
   }