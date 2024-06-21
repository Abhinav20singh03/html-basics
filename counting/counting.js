
let ele = document.querySelector("#printbutton");
ele.addEventListener('click', counting);

function counting() {
    for (let i = 1; i <= 100; i++) {
        let newdiv = document.createElement('div');
        newdiv.textContent = i;
        console.log(i);
        document.body.appendChild(newdiv);
    }
}