const markRead = document.querySelector(".mark-read");
const cardItem = document.querySelectorAll(".item.unread");
const notiNum = document.querySelector(".noti-number");

notiNum.textContent = cardItem.length;  
markRead.addEventListener("click",()=>{
    cardItem.forEach(item=>{
        item.classList.remove('unread')
    })
    notiNum.textContent = 0 
})
