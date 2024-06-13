const postLeido = document.querySelector('#leido');
const nroElemento = document.querySelector('#nro');
const posts = document.querySelectorAll('.post');
const posts2 = document.querySelectorAll('.estatus');
console.log(posts2);

postLeido.addEventListener('click', ()=>{
    const noLeido = document.querySelectorAll('.no-leido');
    noLeido.forEach( (elementoNoLeido)=>{
        elementoNoLeido.classList.remove('no-leido')
    });
    posts2.forEach( (elemento) => {
        elemento.classList.remove('estatus')
    });

    actualizaNotificaciones();
})

posts2.forEach( (cadaPost) =>{
    cadaPost.addEventListener('click', ()=>{
        cadaPost.querySelector('.no-leido').classList.remove('no-leido');
        cadaPost.classList.remove('estatus');
        actualizaNotificaciones();
    } );
})

const actualizaNotificaciones = () => {
    const noLeidoActual = document.querySelectorAll('.no-leido');
    nroElemento.innerText = noLeidoActual.length;
}
