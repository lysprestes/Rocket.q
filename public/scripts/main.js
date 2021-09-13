import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalBtn = document.querySelector('.modal button')


//pegar todos os botoes com a classe 'check'
const checkBtn = document.querySelectorAll('.actions a.check')

checkBtn.forEach(button => {
  //adicionar listener
  //pegar quando o 'marcar como lido' for clicado
  button.addEventListener('click', handleClick)
})

//quando o botao 'delete' for clicado, abrir a modal
const deleteBtn = document.querySelectorAll('.actions a.delete')

// deletar pergunta
deleteBtn.forEach(button => {
  button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault()

  const text = check ? 'Marcar como lida' : 'Excluir'
  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/room/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta?`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
  modalBtn.innerHTML = `Sim, ${text.toLocaleLowerCase()}`

  check ? modalBtn.classList.remove('red') : modalBtn.classList.add('red')

  //abrir modal
  modal.open()
}