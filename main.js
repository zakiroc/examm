
document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

  
    if (username === '123456' && password === '78900') {
     alert('Вход выполнен успешно!')
    } else {
       alert('Введите заново!')
    }
});
let p = document.querySelector('.p-1')
let p_2 = document.querySelector('.p-2')
let p_3 = document.querySelector('.p-3')
document.querySelector('.bt-11').addEventListener('click', function(){
    let hello = prompt('birinchi savolingiz!')
   p.innerHTML = hello
 


})

document.querySelector('.bt-11').addEventListener('click', function(){
    let hell = prompt('ikkinchi savolingiz !')
   p_2.innerHTML = hell
 


})


document.querySelector('.bt-11').addEventListener('click', function(){
    let hel = prompt('uchinchi savolingiz !')
   p_3.innerHTML = hel
 


})







