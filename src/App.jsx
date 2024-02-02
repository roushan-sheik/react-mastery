import MyState from "./components/class/MyState";
import ConditionalRendaring from "./components/conditional rendaring";
function App() {
  let title = "This is card title ";
  let para = "This is Para about blog";
  return (
    <>
      <ConditionalRendaring />
      <MyState />
    </>
  );
}
export default App;
