const node = document.getElementById('newTask');
node.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    newElement();
  }
});

/*function hide() {
  const div = this.parentElement;
  div.style.display = 'none';
}*/

function newElement() {
  const newTask = document.getElementById('newTask').value;
  if (newTask != '') {
    const text = document.createTextNode(newTask);
    const li = document.createElement('LI');
    li.appendChild(text);
    const ul = document.getElementById('list');
    ul.appendChild(li);
    document.getElementById('newTask').value = '';

    const span = document.createElement('SPAN');
    const x = document.createTextNode('\u00D7');
    span.className = 'closeBtn';
    span.appendChild(x);
    li.appendChild(span);

/*    let closeBtn = document.getElementsByClassName('closeBtn');

    for (let i = 0; i < closeBtn.length; i++) {
      alert('hi');
      closeBtn[i].addEventListener('click', hide(), false);
    }*/
  }
}