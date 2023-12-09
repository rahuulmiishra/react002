import { useMemo, memo } from "react";

function Row({ data = {}, onClick = () => {} }) {
  const { id = "", value = "" } = data;
  console.log('Row COmponent re-render');
  



  return (
    <button
      onClick={() => {
        onClick({value, id});
      }}
      className="suggestion-button"
      key={id}
    >
      {value}
    </button>
  );
}

export default memo(Row);
