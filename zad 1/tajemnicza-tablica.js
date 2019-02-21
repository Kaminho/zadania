console.log("tajemnicza-tablica.js")

const white = 'rgb(255, 255, 255)';
const black = 'rgb(0, 0, 0)';

function zad1_1() {
  const table = document.getElementsByTagName('table')[0];
  const tbody = table.getElementsByTagName('tbody')[0];
  
  let password = '';
  
  for (let i = 0; i < tbody.children.length; i++) {
    for (let j = 0; j < tbody.children[i].children.length; j++) {
      const element = tbody.children[i].children[j];
      if (element.style['color'] === element.style['background-color']) {
        password += element.textContent;
      }
    }
  }

  document.getElementById('result').innerHTML = password;
}

function zad1_2() {
  const table = document.getElementsByTagName('table')[0];
  const tbody = table.getElementsByTagName('tbody')[0];
  
  for (let i = 0; i < tbody.children.length; i++) {
    for (let j = 0; j < tbody.children[i].children.length; j++) {
      const element = tbody.children[i].children[j];
      if (element.style['color'] === element.style['background-color']) {
        element.style['color'] = white;
        element.style['background-color'] = black;
      } else {
        element.style['color'] = white;
        element.style['background-color'] = white;
      }
    }
  }
}

function zad1_3() {
  const table = document.getElementsByTagName('table')[0];
  const tbody = table.getElementsByTagName('tbody')[0];

  const password = [];

  for (let i = 0; i < tbody.children.length; i++) {
    for (let j = 0; j < tbody.children[i].children.length; j++) {
      const element = tbody.children[i].children[j];
      if (element.style['color'] !== white || element.style['background-color'] !== white) {
        password.push(element);
      }
    }
  }
  
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  for (let i = 0; i < password.length; i++) {
    tbody.appendChild(password[i]);
  } 

  const buttons = document.getElementsByTagName('button');
  buttons[0].setAttribute('disabled', true);
  buttons[1].setAttribute('disabled', true);
}