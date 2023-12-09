import Row from "../row";

import "./style.css";

function Suggestion({ suggestions = [], onSuggestionSelect = () => {} }) {
  return (
    <div className="suggestion">
      {suggestions?.map((suggestion) => {
        return (
          <Row
            onClick={onSuggestionSelect}
            key={suggestion.id}
            data={suggestion}
          />
        );
      })}
    </div>
  );
}

export default Suggestion;
