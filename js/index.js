var quotes =[
   {text : `Be yourself ; everyone else is already taken.` , author : ` Oscar Wilde`}  , 
   {text : `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.` , author : ` Marilyn Monroe
`} ,
      {text : `So many books, so little time.` , author : `Frank Zappa`} ,
         {text : `A room without books is like a body without a soul.` , author : `Marcus Tullius Cicero`} ,
            {text : `You only live once, but if you do it right, once is enough.` , author : ` Mae West`} ,
             {text : `YIf you tell the truth, you don't have to remember anything.` , author : ` Mark Twain`} ,
              {text : `Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . .` , author : ` C.S. Lewis, The Four Loves`} ,
   
   
   
]
function getQuote(){
    var random = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = `"${quotes[random].text}"`;
      document.getElementById('author').textContent = `- ${quotes[random].author}`;
      
}
 getQuote();