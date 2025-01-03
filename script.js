

document.addEventListener('DOMContentLoaded', ()=>{

    //Theme Toggle 
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', ()=>{
        // Toggle the theme 'dark'? is true, then set it to empty string, else set it to 'dark'
        document.body.dataset.theme = document.body.dataset.theme === 'dark'?  '' : 'dark';
        // toglle the text content 'dark'? is true, then set it to 'Light Mode', else set it to 'Dark Mode'
        themeToggle.textContent = document.body.dataset.theme === 'dark'? 'Light Mode' : 'Dark Mode';
    });

    // Text Size Slidder

    const textSlider = document.getElementById('textSize');
    const sampleText= document.getElementById('sampleText');
   
    /* e is the event object that is passed to the event listener function when the event is triggered 
    it is used to get the value of the input element that triggered the event and 
    set the font size of the sample text to the value of the input element
    */
    textSlider.addEventListener('input',(e) =>{
        const size = e.target.value;
        sampleText.style.fontSize = `${size}px`;
        sampleText.textContent = `Sample text size: ${size}px`
    });

   // MOdal

   const modal = document.getElementById('modal');
   const guidelinesBtn = document.getElementById('guidelinesBtn');
   const closeBtn = document.querySelector('.close');

   guidelinesBtn.addEventListener('click', () => {
         modal.classList.add('show');
   });

   closeBtn.addEventListener('click', () => {
         modal.classList.remove('show');
   });

   window.addEventListener('click' , (e) => {
         if (e.target === modal){
             modal.classList.remove('show');
        }
   });

   //Form Validation

   const form = document.getElementById('votingForm');
   const nameInput = document.getElementById('name');
   const emailInput = document.getElementById('email');
   const passwordInput = document.getElementById('password');
   const nameError = document.getElementById('nameError');
   const emailError = document.getElementById('emailError');
   const passwordError = document.getElementById('passwordError');

   function validateForm() {
        let isValid = true;

        //Reset errors
        nameError.textContent='';
        emailError.textContent='';
        passwordError.textContent='';

        //Name Validation
        if (nameInput.value.length < 3){
            nameError.textContent = 'Name must be at least 3 characters long';
            isValid = false;
        }

        //Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(emailInput.value)){
            emailError.textContent = 'Enter a valid email address';
            isValid = false;
        }

        //Password Validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if(!passwordRegex.test(passwordInput.value)){
            passwordError.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter and one number';
            isValid = false;
        }

        return isValid;
   }

   form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(validateForm()){
        //show success message
        form.innerHTML =`
        <div class="success-message">
             <h3>Registration Successful</h3>
             <p>Thank you for registering to vote. You will receive a confirmation email shortly.</p>
        </div>
        `;
    }
   });

});