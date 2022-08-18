import axios from "axios";
import {useEffect , useState} from "react";
import City from "./City";
import './App.css';


function App() {
  const key = "574c3a1db2b77853de520c2aad25db98"
  const [search, setSearch] = useState ("");
  const [city, setCity] = useState();
  useEffect(() =>{
    async function getApi(){
      try{
        let URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        console.log("URL=",URL);
        const response = await axios.get(URL);
        console.log(response);
        setCity(response.data)
      }catch(error){
        console.log(error);
      }
    }
    getApi();
  },[search])
  
  return (
    <div className="App">
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Placeholder"
        className=" my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
      />
      {city && <City city={city} />}
    </div>
  </div>
  );
}


export default App;
