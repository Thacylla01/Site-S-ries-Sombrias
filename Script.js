



const input = document.querySelector ("#username")
const input2 = document.querySelector ("#password")

function checar () {
let acesso = false
let loginDataBase = {

nome: ["Israel", "israel", "Thallya", "Thacylla", "thallya", "thacylla"],
senha: ["123", "123", "123", "123", "123", "123"]
}

let CadastroLength = loginDataBase.nome.length
for(let i = 0; i < cadastroLength; i++ ) {
let userLogin = loginDataBase.nome[i]
let passwordLogin = loginDataBase.senha[i]
if (userLogin == input.value && passwordLogin == input2.value) {
acesso = true
}

if (acesso) {
alert ("Login com sucesso")
window.location.href ="SeriesSombrias.html"
}else{
if (input.value == "" || input2.value == ""){
alert ("Preencha todos os campos!")
}else{
alert ("Usuário ou Senha incorretos")
      }
   }
}