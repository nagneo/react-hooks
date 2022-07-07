import { useHover } from "./useHover";

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
