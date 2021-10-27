import React,{ useState } from 'react';
import { GetAxieInfo } from "./useRequest";
import Post from "./components/Post";
import './App.css';
function App() {
  const [axieId, setAxieID] = useState("940499");
  const { data, error, isLoading, isSuccess } = GetAxieInfo({axieId});


  if (error) return <h1>Something went wrong!</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  
  return (
    <div className="App">
      <Post axie = {data.axie}/>     
    </div>
  );
}

export default App;
