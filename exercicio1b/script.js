const text = '';

const getWordInput = (event) => {
  event.preventDefault();

  const text = document.getElementById('input').value;
  document.getElementById('value-input').innerHTML = `<p>Palavra digitada: ${text}</p>`;
};
