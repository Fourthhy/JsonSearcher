const form = document.getElementById('myForm');
const submitButton = form.querySelector('button');
const url = 'https://jsonplaceholder.typicode.com/users';
let prompt = document.getElementById('Prompt');

submitButton.addEventListener("click", (e)=> {    
    e.preventDefault();
    fetch(url).then((response)=> {
        response.ok ? response.json()
        .then((data)=>{
            for(let i = 0; i < data.length; i++){
                const Cherry = "Cherry";
                const Fourth = "Fourth";
                const name = document.getElementById('name');
                let nameValue = name.value
                console.log(nameValue);
                if (nameValue === data[i].username){
                    prompt.innerHTML = "Welcome, " +nameValue;
                    setTimeout(()=>{
                        window.location.href = "index2.html";
                    },500)
                    break;
                } else if (nameValue === Cherry) {
                    prompt.innerHTML = "His lover"
                } else if (nameValue === Fourth) {
                    prompt.innerHTML = "He\'s the lover";
                } else {
                    prompt.innerHTML = "Can\'t find " +nameValue+ ", try again"; 
                }
            }
        }):pass
    }).catch((err)=>{
        console.log("Failed to fetch, internet connection required");
        prompt.innerHTML = "Please check internet connection"
    });
});

