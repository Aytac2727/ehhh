var textUser = document.querySelector("#chatInput");
textUser.addEventListener("keyup", function (e) {
    var texti = textUser.value.trim();

    if (texti != "") {
        if (e.keyCode == 13) {
            if (texti[0].toUpperCase() == texti[0]) {
                AddMessage("support", texti)
            }
            else {
                AddMessage("user", texti)
            }
        }
    }

});

var messageBox = document.querySelector(".message");
messageBox.onclick = function(){
    delete messageBox
}



// function AddMessage(clName, texti) {
//     var mDiv = document.createElement("div");
//     mDiv.className = "message "+clName
//     var ptag = document.createElement("p");
//     ptag.innerText = texti;

//     var date = new Date();
//     var ptime = document.createElement("p")
//     ptime.className = "time"
//     ptime.innerText = date.getHours()+":"+date.getMinutes();
//     mDiv.appendChild(ptag);
//     mDiv.appendChild(ptime);
//     document.querySelector("#chat main").appendChild(mDiv)
//     textUser.value = ""
// }

function AddMessage(clName, texti) {
    var date = new Date();
    document.querySelector("#chat main").insertAdjacentHTML('beforeend', `
    <div class="message ${clName}">
                <p>${texti}</p>
          <p class="time">${date.getHours() + ":" + date.getMinutes()}</p>
            </div>
            `)
    textUser.value = ""
}

