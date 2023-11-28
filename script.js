const imgBackBtnEL = document.getElementById("img-back");
let hiddenImages = []
console.log({ imgBackBtnEL })

function imagesBack(imageID) {
    hiddenImages.map((imageID) => {
        document.getElementById(imageID).style.display = block
    })
}
function hideObject(id) {
    hiddenImages.push(id)
    const selectedImg = document.getElementById(id)
    const idVar = document.getElementById(id)
    idVar.style.display = "none";
    console.log(imgBackBtnEL)
    if (imgBackBtnEL.style.display === "none" || !imgBackBtnEL.style.display) {
        imgBackBtnEL.style.display = 'block'
    }


}


//personal thing
let timesClicked = 0
function buttonClicked() {
    timesClicked++
    console.log('button was clicked')
}