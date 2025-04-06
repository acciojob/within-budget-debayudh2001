
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState("")
  const items = [{name: "Apple", price: 20}, {name: "Banana", price: 10}, {name: "Nutella", price: 30}, {name: "Razor", price: 5}, {name: "CornFlakes", price: 15}, {name: "Sound Bar", price: 50}, {name: "Iphone", price: 80}]

  return (
    <div>
        <h3>Enter your budget to check available items:</h3>
        <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
        <br />
        <h3>Items you can buy are in Green color</h3>
        <table style={{width: "300px"}}>
          <tbody>
            {items.map((item, ind) => {
              return (
                <tr style={{width: "100%"}} key={ind}>
                  <td style={{width: "50%", textAlign: "center"}}>{item.name}</td>
                  <td className={item.price > Number(input) ? "red" : "green"} style={{width: "50%", textAlign: "center"}}>{item.price}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </div>
  )
}

export default App
