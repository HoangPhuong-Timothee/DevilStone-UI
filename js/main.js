const buyTicketBtns= document.querySelectorAll('.buy-ticket-btn')
const ticketModal= document.querySelector('.ticket-modal')
const modalContainer=document.querySelector('.ticket-form-container')
const closeModal = document.querySelector('.close-form')
function showBuyTicketForm(){
    ticketModal.classList.add('open')
}
function closeBuyTicketForm(){
    ticketModal.classList.remove('open')
}
for(const buyTicketBtn of buyTicketBtns){
    buyTicketBtn.addEventListener('click', showBuyTicketForm)
}
closeModal.addEventListener('click', closeBuyTicketForm)
ticketModal.addEventListener('click', closeBuyTicketForm)
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})