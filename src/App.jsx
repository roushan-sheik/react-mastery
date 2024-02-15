import State from "./components/passing data child to parent/State-lifting";

function App() {
  function getData(data) {
    console.log(data);
    console.log("App comp:");
  }
  return (
    <div className="container">
      <State getData={getData} />
    </div>
  );
}
export default App;
