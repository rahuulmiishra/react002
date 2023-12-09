import { memo, useCallback, useEffect, useRef, useState } from "react";

import Header from "./components/header";
import Suggesstions from "./components/suggesstions";
import Content from "./components/content";

import { getFilteredSuggestion } from "./util";

import useNetwork from "./useNetwork";

import "./style.css";

const MAX_WAIT_TIME = 5;

const obj = {};

function Autocomplete() {
  const [language, setLanguage] = useState("");
  const [timer, setTimer] = useState(MAX_WAIT_TIME);
  const [userLanguages, setUserLanguges] = useState([]);
  const [enableTyping, setEnabling] = useState(true);

  const timerIDRef = useRef("");

  const networkHook = useNetwork();
  const { data = [], isError = false, isLoading = false } = networkHook || {};

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timerIDRef.current);
      setEnabling(true);
      setTimer(MAX_WAIT_TIME);
    }
  }, [timer]);

  const handleLanguageChange = useCallback((e)=> {
    const value = e?.target?.value;
    setLanguage(value);
  }, []);

  function handleKeyPress(e) {
    const value = e?.target?.value;
  
    if (e.key === "Enter") {
      const oldLangs = [...userLanguages];
      oldLangs.push({ id: value, value });
      setUserLanguges(oldLangs);
    }
  }

  function handleSuggestionSelect({ id, value }) {
    const oldLangs = [...userLanguages];
    oldLangs.push({ id, value });
    setUserLanguges(oldLangs);
    setLanguage("");
    setEnabling(false);
    timerIDRef.current = setInterval(() => {
      setTimer((previousValue) => previousValue - 1);
    }, 1000);
  }

  const filteredSuggestion = getFilteredSuggestion({ data, language });

  if (isError) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <button>Refresh</button>
      </div>
    );
  }

  if (isLoading) {
    return <h1>Data is Loading...</h1>;
  }

  if (!data.length) {
    return <h1>No Data</h1>;
  }

  return (
    <div className="autocomplete">
      <Header
        language={language}
        onKeypress={handleKeyPress}
        onLanguageChange={handleLanguageChange}
        time={timer}
        enableTyping={!enableTyping}
      />
      {!!filteredSuggestion.length && (
        <Suggesstions
          suggestions={filteredSuggestion}
          onSuggestionSelect={handleSuggestionSelect}
        />
      )}
      <Content languages={userLanguages} />
      {/* <TestComponent />
      <MemoC prop={{}} /> */}
    </div>
  );
}

// function TestComponent() {
//     console.log('TestComponent ReRendered');

//     return <h1>TestComponent</h1>
// }

// function MemoizedTestComponent() {
//     console.log('MemoizedTestComponent ReRendered');
//     return <h1>MemoizedTestComponent</h1>
// }
// const MemoC = memo(MemoizedTestComponent, function( ) {
//     return false;
// });

export default Autocomplete;
