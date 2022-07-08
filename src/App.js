import { useFullScreen } from "./useFullscreen";

const App = () => {
  const onFullS = isFull => console.log(isFull ? "We are full" : "We are small");
  const { element, toggleFull} = useFullScreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element} >
        <img src="https://m.media-amazon.com/images/I/71cmfJ3U0HL._AC_SL1414_.jpg" alt="grape" width="500"/>
        <button onClick={toggleFull}>Full On/Off</button>
      </div>
    </div>
  );
};

export default App;
