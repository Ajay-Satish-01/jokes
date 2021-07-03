const api = 'https://official-joke-api.appspot.com/jokes/ten';
fetch(api)
  .then((data) => data.json())
  .then((response) => {
    response.map((res) => jokes(res));

    console.log(response);
  });

let container = document.getElementById('jokes');

let rowdiv = document.createElement('div');
rowdiv.setAttribute('class', 'row');

function jokes(joke) {
  let col1 = document.createElement('div');
  col1.setAttribute('class', 'col-6');

  let carddiv = document.createElement('div');
  carddiv.setAttribute('class', 'card m-2 w-75 h-75');

  let cardbody = document.createElement('div');
  cardbody.setAttribute('class', 'card-body');
  let h5 = document.createElement('h5');
  h5.setAttribute('class', 'card-title');
  h5.innerText = joke.setup;
  let p = document.createElement('p');
  p.setAttribute('class', 'card-text p-2');
  p.innerText = joke.punchline;
  cardbody.append(h5, p);
  carddiv.append(cardbody);
  col1.append(carddiv);
  rowdiv.append(col1);
  container.append(rowdiv);
  document.body.append(container);
}
