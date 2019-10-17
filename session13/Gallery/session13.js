let container = document.getElementById('container');



// container.addEventListener('click', function(){
//     console.log("clicked!");

//     let popout = document.getElementById("popout");
//     popout.style.display = 'none';
//     if (popout.style.display === 'none'){
//         popout.style.display = 'block';
    
//     }
//     else{
//         popout.style.display = 'none';
//     }
// }); 

let items = container.getElementsByClassName("gallery-item");
let popout = document.getElementById("popout");
for (let i = 0; i < items.length; i++){
    items[i].addEventListener('click', function(){
        if (popout.style.display === 'block'){
            popout.style.display = 'none';
        
        }
        else{
            popout.style.display = 'block';
        }
    })
}