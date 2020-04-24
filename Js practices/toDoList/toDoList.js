const submitBtn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('.list-field ul');

function renderNewItem() {
  let li = document.createElement('li');
  if (input.value.length > 0) {
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';

    let deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.setAttribute('class', 'del-item');
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', deleteItem);

    function deleteItem(e) {
      let child = e.target;
      child.parentNode.parentNode.removeChild(child.parentNode);
    }
  } else {
    alert('Please enter valid item.');
  }
}

function enterNewItem(e) {
  if (e.keyCode == 13) {
    renderNewItem();
  }
}

input.addEventListener('keypress', enterNewItem);
submitBtn.addEventListener('click', renderNewItem);