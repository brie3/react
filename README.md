# React scripts.

### Setting up the development environment and the first React application

<p>

1. Install node and npm.
2. Create a project and configure package.json.
3. Set up webpack.config.
4. Using webpack, build the simplest React code using the functional component of the message.
5. Issue the html file into which the assembly is connected using webpack-dev-server.
6. Implement the ability to send a new message with fixed text: add button; process a button click with a function that adds a new message to the message array - for example, with the text “Normal”. The handler function should also do a DOM’s renderer so that the new message is not just added to the array, but also appears on the page of the user.

    </p>

### React component life cycle

   <p>

1. Create two components in the components folder: MessageField and Message. Moreover, the Message components must be nested in the MessageField.
2. Implement sending messages at the click of a button.
3. A robot must respond to each message sent (use componentDidUpdate).
4. Add the author to the messages and display it in the interface. Redo the logic of the response from the robot in accordance with this.
    </p>

### Continue diving into React and plug in the UI library

   <p>

1. Make up the messenger by explicitly highlighting the field for messages and visually separating messages from the user and the responses of the robot.
2. Add the ability to enter the message text and send it:
   the message should be sent either by pressing a button in the interface, or by pressing Enter on the keyboard;
   the input field should be cleared when sending a message.

3. Connect Material-UI and use it to make up the input field, buttons for sending a message.
4. Create new components: Layout, ChatList and Header.
   Layout should be at the top of the application (connect to index.jsx), and ChatList, Header and MessageField inside it; Header should be at the top of the Layout and occupy the entire width; ChatList and MessageField should be located next to each other below the Header so that the Message Field occupies a large part (for example, 30% to 70%); ChatList should only visually reflect a list of 3-5 chats (call them whatever you like) and so far does not carry any functionality. Switching between chats is not necessary; For layout ChatList use List from Material-UI.
5. Fix a bug that occurs if you send a message and, without waiting for a response from the robot, start typing something in the input field. All problems and solutions are discussed in detail in the next lesson.

    </p>

### Routing in React. We break the messenger into chats

   <p>

1. Connect BrowserRouter (from react-router-dom).
2. Create a top Router component with Switch and Routes.
3. Break the application into chats using a router (URLs: / chat / <chat_id> /).
4. Implement storage of messages in a dictionary with id as a key.
5. Implement the storage of chats in a dictionary with id as a key, and as a value with a dictionary from the chat name and a list of id-messages from this chat.
6. Make a profile page located along the path / profile /, and a link to it in the Header’s messenger.
7. Implement the addition of new chats to the messenger. To do this, you need to link together the chats stored in the state MessageField and chats rendered in the ChatList.

    </p>
