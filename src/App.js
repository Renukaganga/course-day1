function App() {
  const arr = [1, 2, 3, 4]
 
  return (
    <div className="App">
      <ul>
        {arr.map((val) => {
          return <li key={val}>{val}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
