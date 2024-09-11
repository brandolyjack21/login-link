

const bodyContainerInput = document.querySelector('.input-link')
const labelZoomLink = document.querySelector('.label-zoom-link')
const buttonLogin = document .querySelector('.button-login')

const bringLinkData = async() => {

    const linkLogin = await window.localStorage.getItem('loginLink')
    console.log(linkLogin,'sss');
    

    if (linkLogin) {
       
        bodyContainerInput.value = linkLogin
        addInputClass()
   
    }
}
 

console.log(bodyContainerInput)
console.log(labelZoomLink);

const addInputClass = () => {

    //console.log('se hizo click dentro de input');
    
    labelZoomLink.classList.add('label-input-link')
    console.log(labelZoomLink.classList);
    

}

const removeInputClass = () => {

    const BCIValue = bodyContainerInput.value.trim()

    if (BCIValue === '') {
        labelZoomLink.classList.remove('label-input-link');
    }

}

const redirectLink = async() => {


    const BCIValue = bodyContainerInput.value.trim()
 
    if (BCIValue) {
        await window.localStorage.setItem('loginLink', BCIValue)
        const loginLink = await window.localStorage.getItem('loginLink')
        window.location.href = loginLink
    }else{
        alert('no existe ningun enlace a donde ir.')
    }
}



bringLinkData()
bodyContainerInput.addEventListener('click',(event) => {
    addInputClass()
    event.stopPropagation()
})
document.addEventListener('click', removeInputClass)
buttonLogin.addEventListener('click', redirectLink)


