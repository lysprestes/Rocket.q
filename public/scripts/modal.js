export default function Modal(){

  const modalWrapper = document.querySelector('.modal-wrapper')

  const cancelBtn = document.querySelector('.button.cancel')

  cancelBtn.addEventListener('click', close)

  function open(){
    // atribuir a classe 'active' para a modal
    modalWrapper.classList.add('active')
  }
  function close(){
    // atribuir a classe 'active' para a modal
    modalWrapper.classList.remove('active')
  }

  return{
    open, 
    close
  }
}

