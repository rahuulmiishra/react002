
import Row from '../row';

import './style.css';

function Content({languages=[]}) {
    return <div className="content">
        {languages?.map(language => {
          return  <Row key={language.id} data={language} />
        })}
    </div>
}

export default Content;