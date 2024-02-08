import { useState } from "react"
import './style.css';

export default function Weather(){
    const[search,setSearch]= useState('');
    const[loading,setLoading]=useState(false)
    const[wdata,setWdata] = useState(null)

    async function fetchdata (param){
        try{
            setLoading(true)
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
              );
    const data = await response.json()
    if (data) {
        setWdata(data);
        setLoading(false);
      }
    
    
    
     
        }
        catch(e){
            setLoading(false);
            console.log(e)
        }
    }

    async function handleSearch(){
   fetchdata(search)
    }
    function getCurrentDate() {
        return new Date().toLocaleDateString("en-us", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }

    return(
        <div className="containerr">
            <div className="search-engine">
<input type="text" name="search" value={search} placeholder="Enter Place to search" onChange={(e)=>setSearch(e.target.value)}/>

<button onClick={handleSearch}>Search</button></div>
{loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {wdata?.name}, <span>{wdata?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{wdata?.main?.temp}</div>
          <p className="description">
            {wdata && wdata.weather && wdata.weather[0]
              ? wdata.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{wdata?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{wdata?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    
        
    )
}