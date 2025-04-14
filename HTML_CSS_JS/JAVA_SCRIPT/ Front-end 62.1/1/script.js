const openModal = document.querySelector('.open__modal')
const closeModal = document.querySelector('#close')
const closeDialog = document.querySelector('#closeDialog')
const openDialogModal = document.querySelector('#openDialogModal')
const modal = document.querySelector('.modal')
openModal.addEventListener('click', (e) => {
    modal.style.display = 'flex'
    console.log([modal]);
})

//Реализовать закрытие по клику вне модального окна
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
})

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none'
    }
})

openDialogModal.addEventListener('click', () => {
    document.querySelector('.dialog__modal').showModal()
})

closeDialog.addEventListener('click', () => {
    document.querySelector('.dialog__modal').close()
})