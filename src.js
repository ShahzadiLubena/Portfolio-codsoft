 let button = document.getElementById("btn1");
 button.addEventListener("click",(event)=>{
     event.preventDefault();
   document.querySelector("#btn1").innerHTML="Custom Website Design: I create unique, visually appealing websites tailored to your brand. I build websites that work flawlessly on all devices, ensuring a great user experience.I set up and customize CMS platforms like WordPress for easy content management."
 })
 let button2 = document.getElementById("btn2");
 button2.addEventListener("click",(event)=>{
     event.preventDefault();
   document.querySelector("#btn2").innerHTML="Developing comprehensive design systems for consistency and scalability across projects.Crafting detailed wireframes to outline the structure and flow of your website or app.";
 })
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwf2qqLtwFImURYAOb9zwHrY2K9X6e8ZGiIpYCD6VMHReguscZQaMSd9qO1uAVJSYk/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })