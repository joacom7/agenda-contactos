
const contactPost = document.getElementById('contactPost')
/* import saveContact from '../../../Backend/src/controllers/contacts.controllers' */

const prueba = contactPost.addEventListener('click', $('#nameContact').focusout(function() {
    let x = $(this).val();
    alert(x);
        // Recomiendo usar la consola en lugar de alerts
    return x
   }))
 prueba()
/* contactPost.addEventListener('click', 
 () => {
    const datos = contactosAgregar.value
    console.log(datos)
})
 */
/* ()=>{
    const datos = contactosAgregar.value
    
} */
/* contactPost.addEventListener('click', ()=>{
    const datos = contactosAgregar.value
    return datos
} )

const addContactFunc = ()=>{
    

}  */

