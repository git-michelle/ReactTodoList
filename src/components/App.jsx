import React, {useState} from "react";

function App() {

const [inputText, setInputText] = useState("");
const [items, setItems] = useState([]);

function saveInputText(event){
 const newValue = event.target.value;
 setInputText(newValue);
}

function addToList(event){
setItems( (prevItems) => {
return [...prevItems, inputText];
});
//to clear input field after item added
setInputText("");
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={inputText} onChange={saveInputText} type="text" />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map(eachItem => <li>{eachItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
