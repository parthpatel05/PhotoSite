import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <h1>Explain PhotoCircuits</h1>
      <h1>explain component detection</h1>
      <p>what we tried, what worked</p>
      <p>
        Used Yolo for the detectino of components
        Tried detecting just the component and not the text, but the text would create problems in the future
        Then decided deteting the component and the accompanying text
        Then ran into problem that sometimes past of the component would not be fully covered which created problem in node detection

      </p>
      <h1>explain number detection</h1>
      <p>
        nearest neighbors
        then number inside box
        the mnist number
      </p>
      <h1>explain node detection</h1>
      <p>
        used edge detection to find the nodes
        then assigned nodes depending on if it had points from the node inside the box


      </p>

      <h1>explain solving</h1>
      <h1>explain the component class?</h1>
      <p>explain signs</p>
    </div>
  );
}

export default App;
