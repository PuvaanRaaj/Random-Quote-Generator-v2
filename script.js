// Array of quotes and their authors
const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
      author: "Steve Jobs"
    },
    {
      quote: "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      author: "Oprah Winfrey"
    },
    {
      quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: "James Cameron"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      author: "Mother Teresa"
    },
    {
      quote: "When you reach the end of your rope, tie a knot in it and hang on.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Always remember that you are absolutely unique. Just like everyone else.",
      author: "Margaret Mead"
    },
    {
      quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      author: "Robert Louis Stevenson"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
      author: "Benjamin Franklin"
    },
    {
      quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
      author: "Helen Keller"
    },
    {
      quote: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle"
    },
    {
      quote: "Whoever is happy will make others happy too.",
      author: "Anne Frank"
    },
    {
      quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "You will face many defeats in life, but never let yourself be defeated.",
      author: "Maya Angelou"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln"
    },
    {
      quote: "Never let the fear of striking out keep you from playing the game.",
      author: "Babe Ruth"
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller"
    },
    {
      quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
      author: "Thomas A. Edison"
    },
    {
      quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
      author: "Dr. Seuss"
    },
    {
      quote: "The purpose of our lives is to be happy.",
      author: "Dalai Lama"
    },
    {
      quote: "Never. I don’t ever give up. I’d have to be dead or completely incapacitated. For my part, I will never give up, and I mean never.",
      author: "Elon Musk"
    },
    {
      quote: "I think people can choose to be not ordinary. You know, they can choose to not necessarily conform to the conventions that were taught to them by their parents. So, yes, I think it’s possible for ordinary people to choose to be extraordinary.",
      author: "Elon Musk"
    },
    {
      quote: "A source of strength, hm. That’s really not how I think about things. For me it’s simply: This is something that is important to get done, and we should just keep doing it or die trying. I don’t need a source of strength. [Quitting] is not in my nature, and I don’t care about optimism or pessimism. F*ck that, we’re gonna get it done.",
      author: "Elon Musk"
    },
    {
      quote: "You guys are the magicians of the 21st century. Don’t let anything hold you back. Imagination is the limit. Go out there and create some magic.",
      author: "Elon Musk"
    },
    {
      quote: "[Mars] would just be the greatest adventure. Ever. And very exciting. And I think we need things in life that are exciting and inspiring. It can’t just be about solving some awful problem. There have to be reasons to get up in the morning.",
      author: "Elon Musk"
    },
    {
      quote: "Take risks now. Do something bold. You won’t regret it.",
      author: "Elon Musk"
    },
    {
      quote: "When something is important enough, you do it even if the odds aren’t in your favor.",
      author: "Elon Musk"
    },
    {
      quote: "When I was a little kid, I was really scared of the dark. But then I came to understand, okay, dark just means the absence of photons in the visible wavelength — 400 to 700 nanometers. Then I thought, well, it’s really silly to be afraid of a lack of photons. Then I wasn’t afraid of the dark anymore after that.",
      author: "Elon Musk"
    },
    {
      quote: "I feel fear quite strongly. It’s not as though I just have the absence of fear. I feel it quite strongly. But there are times when something is important enough, you believe in it enough, that you do it in spite of the fear. People shouldn’t think, ‘I feel fear about this, and therefore I shouldn’t do it.’ It’s normal to feel fear. There’d have to be something mentally wrong [with you] if you didn’t feel fear. […] If you just accept the probabilities, then that diminishes fear.",
      author: "Elon Musk"
    },
    {
      quote: "I think it’s very difficult to start companies and quite painful. There’s a friend of mine who’s got a good phrase for doing a startup: ‘It’s like eating glass and staring into the abyss.’ If you’re sort of wired to do it, then you should do it, but not otherwise. If you need inspiring words, don’t do it.",
      author: "Elon Musk"
    },
    {
      quote: "Well, I do think there’s a good framework for thinking. It is physics. You know, the sort of first principles reasoning. What I mean by that is boil things down to their fundamental truths and reason up from there, as opposed to reasoning by analogy. Through most of our life, we get through life by reasoning by analogy, which essentially means copying what other people do with slight variations. And you have to do that. Otherwise, mentally, you wouldn’t be able to get through the day. But when you want to do something new, you have to apply the physics approach.",
      author: "Elon Musk"
    },
    {
      quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
      author: "Martin Luther King, Jr."
    },
    {
      quote: "I think most people can learn a lot more than they think they can. They sell themselves short without trying. One bit of advice: It is important to view knowledge as sort of a semantic tree — make sure you understand the fundamental principles, i.e. the trunk and big branches, before you get into the leaves/details, or there is nothing for them to hang on to.",
      author: "Elon Musk"
    },
    {
      quote: "All that glitters is not gold.",
      author: "William Shakespeare"
    },
    {
      quote: "It’s very important to actively seek out and listen very carefully to negative feedback. This is something that people tend to avoid because it’s painful, but I think this is a very common mistake. To not actively seek out and listen to negative feedback. […] When friends get a product, I say, ‘Look, don’t tell me what you like. Tell me what you don’t like.’ Because otherwise, your friend is not going to tell you what he doesn’t like. You really need to sort of coax negative feedback. If somebody’s your friend or at least not your enemy, and they’re giving you negative feedback, then they may be wrong, but it’s coming from a good place.",
      author: "Elon Musk"
    },
    {
      quote: "I think it’s very important to have a feedback loop, where you’re constantly thinking about what you’ve done and how you could be doing it better. I think that’s the single best piece of advice: constantly think about how you could be doing things better and questioning yourself.",
      author: "Elon Musk"
    },
    {
      quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison"
    },
    {
      quote: "A good sign as to whether there’s free speech is: Is someone you don’t like allowed to say something you don’t like? If that is the case, then we have free speech. And it’s damn annoying when someone you don’t like says something you don’t like. [But] that is a sign of a healthy, functioning, free speech situation.",
      author: "Elon Musk"
    },
    {
      quote: "One of the really tough things is figuring out what questions to ask. Once you figure out the question, then the answer is relatively easy. I came to the conclusion that really we should aspire to increase the scope and scale of human consciousness in order to better understand what questions to ask. The only thing that makes sense to do is strive for greater collective enlightenment.",
      author: "Elon Musk"
    },
    {
      quote: "Always take the position that you are to some degree wrong, and your goal is to be less wrong over time. One of the biggest mistakes people generally make, and I’m guilty of it too, is wishful thinking. You want something to be true, even if it isn’t true. And so you ignore the real truth because of what you want to be true. This is a very difficult trap to avoid. [So] just take that approach, that you’re always to some degree wrong, and your goal is to be less wrong.",
      author: "Elon Musk"
    }
  ];
  
  
// Function to select a random quote from the quotes array
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteObject = quotes[randomIndex];
    return quoteObject; // This will return an object with 'quote' and 'author' properties
}
  
 // Function to update the quote and author on the page
function updateContent() {
    // Start the loading animation on the button
    const quoteButton = document.querySelector('button');
    quoteButton.innerText = 'Loading...';
    quoteButton.classList.add('loading');

    setTimeout(() => {
        const randomQuoteObject = getRandomQuote();
        const quoteElement = document.querySelector('.quote');
        const authorElement = document.querySelector('.name');
        quoteElement.innerText = randomQuoteObject.quote;
        authorElement.innerText = randomQuoteObject.author;

        // End the loading animation on the button
        quoteButton.innerText = 'New Quote';
        quoteButton.classList.remove('loading');
    }, 500); // 2000 milliseconds delay to simulate the loading time
}
  
  const synth = window.speechSynthesis;
  
  // Function to speak the quote
  function speakQuote() {
    if (synth.speaking) {
      synth.cancel();
    }
  
    const voices = synth.getVoices();
    let selectedVoice;
    
    // This will select a voice called 'Google US English'. 
    // You can replace it with a different voice name available on your machine.
    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].name === 'Google UK English') {
        selectedVoice = voices[i];
      }
    }
    
    const utterance = new SpeechSynthesisUtterance(`${document.querySelector('.quote').innerText} by ${document.querySelector('.name').innerText}`);
    utterance.voice = selectedVoice; // Here we assign the selected voice to the utterance
    synth.speak(utterance);
  }
  
  // Function to copy the quote along with the author's name
function copyQuote() {
    const quote = document.querySelector('.quote').innerText;
    const author = document.querySelector('.name').innerText;
    navigator.clipboard.writeText(`"${quote}" - ${author}`);
  }
  
  
  // Function to tweet the quote
  function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + document.querySelector('.quote').innerText + '" ' + '- ' + document.querySelector('.name').innerText)}`;
    window.open(tweetUrl, '_blank');
  }
  
  // Event listeners for button clicks
  document.querySelector('button').addEventListener('click', updateContent);
  document.querySelector('.speech').addEventListener('click', speakQuote);
  document.querySelector('.copy').addEventListener('click', copyQuote);
  document.querySelector('.twitter').addEventListener('click', tweetQuote);
  
  // Call the updateContent function on page load
  window.onload = updateContent;
  