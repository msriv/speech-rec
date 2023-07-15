const API_URL = ""

document.addEventListener('DOMContentLoaded', () => {
  const messageContainer = document.getElementById('message-container');
  const inputText = document.getElementById('input-text');
  const sendButton = document.getElementById('send-button');

  const messages = [];

  const handleSend = async () => {
    const text = inputText.value.trim();
    if (text === '') {
      return;
    }

    const newMessage = { text, sender: 'user' };
    messages.push(newMessage);
    renderMessages();

    try {
    //   const response = await axios.post(API_URL, { text });
      const response = "Response from bot"
      const botMessage = { text: response, sender: 'bot' };
      messages.push(botMessage);
      renderMessages();
    } catch (error) {
      console.error('Error:', error);
    }

    inputText.value = '';
  };

  const renderMessages = () => {
    messageContainer.innerHTML = '';
    messages.forEach((message) => {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', message.sender);
      messageElement.textContent = message.text;
      messageContainer.appendChild(messageElement);
    });
  };

  sendButton.addEventListener('click', handleSend);
});
