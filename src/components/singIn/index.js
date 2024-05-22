const login = document.querySelector('#login');
login.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.querySelector('#exampleInputEmail1').value;
    const password = document.querySelector('#exampleInputPassword1').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario o contraseña incorrectos')
    }
    alert(`Bienvendio ${validUser.name}`)
    window.location.href = '/index.html'
})