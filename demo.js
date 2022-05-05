const lamp_on = document.querySelectorAll('.lamp-on');
const lamp_off = document.querySelectorAll('.lamp-off');
const lampImg = document.querySelectorAll('.lamp-img img')


const openLight = (e, index) => {
    console.log(e);
    lampImg[index].src = "./img/on.gif";
}

const closeLight = (e, index) => {
    lampImg[index].src = "./img/off.gif";
}


lamp_on.forEach((lamp, index) => {
    lamp.addEventListener('click', (e) => {
        openLight(e, index);
    })
})

lamp_off.forEach((lamp, index) => {
    lamp.addEventListener('click', (e) => {
        closeLight(e, index);
    })
})