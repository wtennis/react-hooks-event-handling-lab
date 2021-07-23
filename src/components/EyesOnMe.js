// Code EyesOnMe Component Here

function EyesOnMe() {
    function blurHandler() {
        console.log('Hey! Eyes on me!')
    }

    function focusHandler() {
        console.log('Good!')
    }

    return (
   <button onFocus ={focusHandler} onBlur = {blurHandler}>Eyes on me</button>
    )
}

export default EyesOnMe;