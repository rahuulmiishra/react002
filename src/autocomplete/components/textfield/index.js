
import './style.css';

function Textfield({text='', disabled=false ,onInput=()=> {}, onKeypress=()=> {}}) {
    return <input value={text} disabled={disabled} onKeyUp={onKeypress} onInput={onInput} placeholder='Enter your language' />

}

export default Textfield;