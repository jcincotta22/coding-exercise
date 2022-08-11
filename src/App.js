import { useEffect, useState } from "react";
import "./App.css";
import drawCanvas from "./canvas";
import { BinaryTreeNode } from "./BinaryTree";

function App() {
  const [tree, setTree] = useState(null);
  const [canvas, setCanvas] = useState(null);
  const [inputVal, setInputValue] = useState("");
  useEffect(() => {
    const canvas = document.getElementById("myCanvas");
    const BT = new BinaryTreeNode();
    setCanvas(canvas);
    setTree(BT);
  }, []);

  const handleOnChange = (val) => {
    if (val) setInputValue(parseInt(val));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal) {
      if (canvas && tree) {
        tree.insert(inputVal);
        drawCanvas(canvas, tree.getTree());
      }
      setInputValue("");
    }
  };

  return (
    <div className="App">
      <div className="my-form">
        <form action="" id="bstForm" onSubmit={(e) => handleSubmit(e)}>
          <input
            name="bst-val"
            placeholder="Enter Value"
            value={inputVal}
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <canvas width="600" height="900" id="myCanvas"></canvas>
    </div>
  );
}

export default App;
