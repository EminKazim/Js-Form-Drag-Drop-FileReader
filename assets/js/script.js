//forms

// let form = document.getElementById("form");
// let inputPass = document.querySelector(".password");
// let inputEmail = document.querySelector(".email");
// let errorMessage = document.getElementById("error-message");
// let cities = document.getElementById("cities");



// inputEmail.addEventListener("keyup", function (e) {
//     if (inputEmail.value.trim() == "") {
//         errorMessage.classList.remove("d-none");
//         this.parentNode.lastElementChild.classList.add("disabled")

//     } else {
//         errorMessage.classList.add("d-none");
//         this.parentNode.lastElementChild.classList.remove("disabled")
//     }
// })

// inputEmail.addEventListener("change",function(e){
//     console.log("changed")
// })


// cities.addEventListener("change", function (e) {
//     console.log(this.value)
// })

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     if (inputEmail.value.trim() == "") {
//         errorMessage.classList.remove("d-none");

//     } else {
//         errorMessage.classList.add("d-none");
//     }
// })


//drag-drop

// let dragElems = document.querySelectorAll(".item");
// let dropArea = document.getElementById("drop-area");

// dragElem.ondragend = (e) => {
//     e.target.style.backgroundColor = "teal";
// }

// dragElem.ondrag = (e) => {
//     e.target.style.backgroundColor = "red";
// }

// let id;

// dragElems.forEach(elem=>{
//     elem.ondragstart = (e) => {
//       e.dataTransfer.setData("id",e.target.id);
//       //id = e.target.id;
//     }
// })


// dropArea.ondragover = (e)=>{
//     e.preventDefault();
// }

// dropArea.ondrop = (e)=>{
//    let id = e.dataTransfer.getData("id");
//    e.target.append(document.getElementById(id));
// }

let upload = document.getElementById("upload");
let table = document.getElementById("table");
let dropPlace = document.querySelector(".upload-area");

upload.addEventListener("click", function () {
    this.nextElementSibling.click();
})

upload.nextElementSibling.onchange = function (e) {
    uploadImages(e.target.files);
}

dropPlace.ondragover = (e)=>{
    e.preventDefault();
}

dropPlace.ondrop = (e)=>{
    e.preventDefault();
    uploadImages(e.dataTransfer.files);

}

function uploadImages(files){
    for (const file of files) {
        let reader = new FileReader();
        reader.onloadend = function (ev) {
            console.log(ev)
            table.lastElementChild.innerHTML += `<tr>
            <th><img src="${ev.target.result}" style="height:100px" alt=""></th>
            <td>${file.name}</td>
            <td>${file.type}</td>
            <td>${file.size/1024} kb</td>
          </tr>`
        }
        reader.readAsDataURL(file);
    }
}