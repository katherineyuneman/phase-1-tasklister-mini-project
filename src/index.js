document.addEventListener("DOMContentLoaded", () => {

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  buildToDo(e.target.new_task_description.value);

})


})

function buildToDo (todo){
  let li = document.createElement('li');
  li.textContent = todo
  let btn = document.createElement('button')
  li.appendChild(btn)
  btn.textContent = ' x '
  btn.addEventListener('click', handleDelete)

  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e){
  e.target.parentNode.remove();
}
