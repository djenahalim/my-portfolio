$(document).ready(function() {

getTest()

  // chatbot

  const $chatBoard = $('.chat__conversation-board');

  // Typing animation for bot
  function typeBotMessage(message, delay = 300) {
    const words = message.split(' ');
    const $container = $('<div class="chat__conversation-board__message-container"></div>');
    const $context = $('<div class="chat__conversation-board__message__context"></div>');
    const $bubble = $('<div class="chat__conversation-board__message__bubble"><span></span></div>');
    const $span = $bubble.find('span');

    $context.append($bubble);
    $container.append($context);
    $chatBoard.append($container);

    let i = 0;
    function typeNextWord() {
      if (i < words.length) {
        $span.append(words[i] + ' ');
        i++;
        $chatBoard.scrollTop($chatBoard[0].scrollHeight);
        setTimeout(typeNextWord, delay);
      }
    }

    typeNextWord();
  }

  // Display user's message
  function addUserMessage(text) {
    const $container = $('<div class="chat__conversation-board__message-container reversed"></div>');
    const $context = $('<div class="chat__conversation-board__message__context"></div>');
    const $bubble = $('<div class="chat__conversation-board__message__bubble"><span></span></div>');
    $bubble.find('span').text(text);

    $context.append($bubble);
    $container.append($context);
    $chatBoard.append($container);
  }

  // Call API and get bot response
  async function getBotResponse(message) {
    try {
      const response = await fetch('https://ginger-eggplant-split.glitch.me/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });
      const data = await response.json();
      typeBotMessage(data.response || "Sorry, I didn't understand that.");
    } catch (error) {
      console.error('Fetch error:', error);
      typeBotMessage("Oops! Something went wrong.");
    }
  }


  async function getTest() {
    try {
      const response = await fetch('https://ginger-eggplant-split.glitch.me/message', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  // Handle sending a message
  function sendMessage() {
    const $input = $('.chat__conversation-panel__input');
    const userText = $input.val().trim();
    if (userText === '') return;

    addUserMessage(userText);
    getBotResponse(userText);
    $input.val('');
  }

  // Event listener for button
  $('.send-message-button').on('click', sendMessage);

  // Enter key press
  $('.chat__conversation-panel__input').on('keypress', function (e) {
    if (e.which === 13) {
      sendMessage();
    }
  });

  // Welcome message on load
  setTimeout(() => {
    typeBotMessage("Hey there! I'm Halim's portfolio chatbot, your gateway to getting to know him as a developer. Feel free to ask me anything about his skills, experience, or projects. Let's chat!");
  }, 500);
});
