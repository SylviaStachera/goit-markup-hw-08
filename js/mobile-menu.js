const menuOverlay = document.querySelector('.mobile')
const closeMenuButton = document.querySelector('.mobile__btn')
const openMenuBtn = document.querySelector('.burger')

openMenuBtn.addEventListener('click', e => {
	menuOverlay.classList.remove('d-none')
})

closeMenuButton.addEventListener('click', e => {
	menuOverlay.classList.add('d-none')
})
