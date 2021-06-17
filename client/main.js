let chatContainer = document.querySelector("ul")
let inputEl = document.getElementById("msg-input");
let buttonEl = document.getElementById("send");

const socket = io('ws://localhost:3030')
socket.on('connect',()=>{
    console.log('connection established');
})

buttonEl.addEventListener("click", (e) => {
  socket.send(inputEl.value);
});

socket.on('message',(data)=>{
    console.log(data)
    let listEl = document.createElement('li')
    listEl.innerText = data
    chatContainer.appendChild(listEl)
})



// let socket = new WebSocket("ws://localhost:3030")io;

// socket.onopen = (e) => {
//   console.log("Connected to server");
//   socket.send("I'm new here.Thanks for having me.");
// };
// socket.onclose = (e) => {
//   console.log("Server closed for some reason!");
// };
// socket.onmessage = (msg) => {
//   console.log(msg.data);
//   messageEl.innerText = msg.data;
// };


