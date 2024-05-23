// let count = 0;

// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");
// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         const styles = e.currentTarget.classList;
//         if(styles.contains("decrease")){
//             count--;
//         }
//         else if(styles.contains("increase")){
//             count++;
//         }
//         else{
//             count = 0;
//         }
//         if(count>0){
//             value.style.color = "green";
//         }
//         if (count<0){
//             value.style.color = "red"; 
//         }
//         if (count===0){
//             value.style.color = "#222";
//         }
//         value.textContent = count;
//     });
// });

const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value"); 
let count = 0;

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        const styles = e.currentTarget.classList;

        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        value.style.color = count > 0 ? "green" : count < 0 ? "red" : "#222";
        value.textContent = count;
    });
});
