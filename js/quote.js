const quotes = [
  {
    quote: "I failed my way to success.",
    author: "-Thomas Edison-",
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "-Thomas Edison-",
  },
  {
    quote:
      "Success is not final, failure is not fatal. It is the courage to continue that counts.",
    author: "-Winston S. Churchill-",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "-Helen Keller-",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "-Walt Disney-",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "-Albert Einstein-",
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "-Eleanor Roosevelt-",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking",
    author: "-Steve Jobs-",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "-John Lennon-",
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "-James Cameron-",
  },
];

const randomNum = Math.floor(Math.random() * quotes.length);
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[randomNum];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;