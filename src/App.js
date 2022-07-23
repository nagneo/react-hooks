import { useNotification
 } from "./useNotification";
const App = () => {
  const triggerNotif = useNotification("Can I steal your kimchi", {body:"I love kimchi"});
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default App;
