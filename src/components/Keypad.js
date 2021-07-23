

function KeyPad() {

    function KeyPadHandler() {
        console.log('Entering password...')
    }
    return (
        <input type = "password" onChange = {KeyPadHandler}/> 
        )
}

export default KeyPad;