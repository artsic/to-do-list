/*Handles when user presses add task button '+'*/
function newElement() {
  const newTask = document.getElementById('newTask').value;
  if (newTask != '') {
    const text = document.createTextNode(newTask);
    const li = document.createElement('LI');
    li.appendChild(text);
    const ul = document.getElementById('list');
    ul.appendChild(li);
    document.getElementById('newTask').value = '';

    /*Add close button*/
    const span = document.createElement('SPAN');
    const x = document.createTextNode('\u00D7');
    span.className = 'closeBtn';
    span.appendChild(x);
    li.appendChild(span);

    const closeBtn = document.getElementsByClassName('closeBtn');

    for (let i = 0; i < closeBtn.length; i++) {
      closeBtn[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      };
    };
  };
};

/*Handles when user presses 'Enter' instead of add task button*/
const node = document.getElementById('newTask');
node.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    newElement();
  };
});
