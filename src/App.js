
import { ReactDOM } from "react-dom";
import useAxios from "./useAxios/useAxios";

const App = () => {
  const { loading, data, refetch} = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json" 
  });

  console.log(`Loading: ${loading}\nData: ${data}\nError: ${error}\n`)
  return (
    <div className="App" style={{ height: "1000vh"}}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>  
    </div>
  )
  
}
