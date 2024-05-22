const singUpForm = document.querySelector("#singUpForm")
singUpForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.querySelector("#inputName").value;
    const email = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = users.find(user => user.email === email);
    if(isUserRegistered){
        return alert(`El usuario ya esta registrado`);
    }

    users.push({name: name, email: email, password: password});
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso')
    window.location.href = '/src/components/singIn/index.html'
})