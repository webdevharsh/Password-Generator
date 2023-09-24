let passLength = document.querySelector('.passLength input');
let options = document.querySelectorAll('.password-setting div input');
let generateBtn = document.querySelector('.generate-btn');
let password = document.querySelector('.password');
let copyBtn = document.querySelector('#copy-btn');
let passIndicator = document.querySelector('.container .indicator');

let getPassLengthValue =()=>{
 document.querySelector('.passLength span').innerHTML = passLength.value;    
}

const characters = {
uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lowercase: "abcdefghijklmnopqrstuvwxyz",
numbers: "0123456789",
symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};


let getPassword =()=>{
let strongPassword = "";
let randomPassword = "";
let passWordLength = passLength.value;
  options.forEach((option)=>{
if(option.checked){       
    strongPassword += characters[option.id]  
} 
  })
for (let i = 0; i<passWordLength; i++) {
 randomPassword += strongPassword[Math.floor(Math.random() * strongPassword.length)];
}  
password.value = randomPassword;
}

let copyPassword =()=>{
navigator.clipboard.writeText(password.value);    
}

let updateIndicator =()=>{
 passIndicator.id = passLength.value <= 8 ? 'weak' : passLength.value <= 16 ? 'medium' : 'strong';
}

getPassword();
passLength.addEventListener('input',()=>{
  getPassLengthValue();
  getPassword();
  updateIndicator();
});

copyBtn.addEventListener('click',copyPassword);
generateBtn.addEventListener('click',getPassword)
