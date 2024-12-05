var Quote = [
  {
    quote:
      "I am so clever that sometimes I don't understand a single word of what I am saying.",
    auther: "― Oscar Wilde",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    auther: "― Andre Gide",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    auther: "― Oscar Wilde",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    auther: "― Oscar Wilde",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    auther: "― Robert Frost",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    auther: "― Bernard M. Baruch",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    auther: "― Albert Einstein",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    auther: "― Dr. Seuss",
  },
];

var fixRepeat = -1;

function startQuote() {
  var num;

  do {
    num = Math.floor(Math.random() * Quote.length);
  } while (fixRepeat === num);
  fixRepeat = num;
  document.getElementById("quotes").innerHTML = Quote[num].quote;
  document.getElementById("auther").innerHTML = Quote[num].auther;
}

document.getElementById("start").onclick = startQuote;
