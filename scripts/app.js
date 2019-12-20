//dom quires
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');
//add new chat

newChatForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then( () => newChatForm.reset())
    .catch(err => console.log(err));
})

//upadte the chat room
rooms.addEventListener('click' , (e) => {
    if(e.target.tagName === 'BUTTON') {
        chatui.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatui.render(chat));
    }
})

//update user name
newNameForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName)
    newChatForm.reset();
    //update the name
    updateMssg.innerText = `your name was updated ${newName}`
    setTimeout(() => updateMssg.innerText = '' , 3000)
})

//check localstorage for name
const username = localStorage.username ? localStorage.username : 'a non';

//class instance
const chatui = new ChatUi(chatList);
const chatroom = new Chatroom('gaming' , username);

//gets caht and render
chatroom.getChats( data => chatui.render(data));


