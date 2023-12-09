import Textfield from "../textfield";
import Timer from "../timer";

import './style.css';

function Header({onLanguageChange, language, onKeypress, time, enableTyping}) {
  return (
    <div className="header">    
      <Textfield disabled={enableTyping} text={language} onKeypress={onKeypress} onInput={onLanguageChange}/>
      <Timer value={time} />
    </div>
  );
}

export default Header;
