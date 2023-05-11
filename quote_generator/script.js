
let count = 0;
async function getQuotes() {
    let response = await fetch('https://type.fit/api/quotes');
    let data = await response.json();
    let randomIndex = Math.floor(Math.random() * data.length);
    let quoteTxt = data[randomIndex];
    console.log(quoteTxt);
    document.getElementById('quote').innerHTML = 
    `
    <p>
    ${quoteTxt.text}
   </p>
   <h1>${count}</h1>
   <h4>${quoteTxt.author}</h4>
    `;
    count++;
}
