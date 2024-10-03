async function getCEP(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`
  const responseHTML = await fetch(url);
  const data = await responseHTML.json();

  return data;
}

function preencherDados(data) {
  const rua = document.querySelector('#street').value = `${data.logradouro}`
  const numero = document.querySelector('#number').value = `${data.gia}`
  const bairro = document.querySelector('#neighborhood').value = `${data.bairro}`
  const estado = document.querySelector('#state').value = `${data.uf}`
  const cidade = document.querySelector('#city').value = `${data.localidade}`

}

function limpar() {
  const rua = document.querySelector('#street').value = ''
  const numero = document.querySelector('#number').value = ''
  const bairro = document.querySelector('#neighborhood').value = ''
  const estado = document.querySelector('#state').value = ''
  const cidade = document.querySelector('#city').value = ''

}
document.querySelector('#cep').addEventListener('keyup', async (event) => {
  const cep = event.target.value;
  if (cep.length === 8) {
    const data = await getCEP(cep);
    preencherDados(data)
    console.log(data)
  }
  else {
    limpar()
  }
});