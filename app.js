let h = document.querySelector('h1');
let btn = document.querySelector('button');
let p = document.querySelector('p');

let url = "https://catfact.ninja/fact";

async function getFacts(){
    let res = await axios.get(url);
    console.log(res.data.fact);
    return res.data.fact;
    
}
/*btn.addEventListener("click",()=>{
    let ans = getFacts();
    p.innerText = `${ans}`;
});*/

btn.addEventListener("click", async () => { // Make this function async
    let ans = await getFacts(); // Await the result of getFacts
    p.innerText = `${ans}`; // Use template literal correctly
});