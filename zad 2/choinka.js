console.log("choinka.js");
const treeDiv = document.getElementById('tree');

const inputs = document.getElementsByTagName('input');

function createTree() {
  treeDiv.innerHTML = '';
  const lvls = inputs[0].value;
  const capacity = inputs[1].value;
  
  let tree = '*</br>';
  let lvl = 0;

  for (let i = 1; i < lvls; i++) {
    const reminder = i % capacity; 
    if (reminder === 0) {
      lvl += 2;
    }
    tree += '/' + ('&nbsp;'.repeat(i * 2 - lvl)) + '\\</br>';
  }

  const div = document.getElementsByClassName('actions')[0].getElementsByTagName('div')[0];
  div.innerHTML = 'Liczba pięter: ' + Math.round(lvls / capacity).toString();

  treeDiv.innerHTML = tree;
}