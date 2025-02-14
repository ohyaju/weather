'use client'
import { useEffect, useState } from "react";
import { Input } from "./components/input";
import { Sun } from "./components/sun";
import { Moon } from "./components/moon";
import { Logo } from "./components/logo"

// let count = 0;
export default function Home() {
  const [countries, setCountries] = useState([]);
  // const [searchValue, setSearchValue]=useState ('');
  const [filteredCountries, setFilteredCountries]=useState([]);
  // const [number,setNumber]=useState(0)
  const [selectedCountry, setSelectedCountry]=useState('tokyo');
  const[currentForecast, setCurrentForecast]=useState (null)

  useEffect(() => {
    const getData = async () => {
      const responce = await 
      fetch('https://countriesnow.space/api/v0.1/countries')

      const countries = await responce.json();
      const arr = [];
      // countries.data.flatMap(country => console.log(country))
      countries.data.map(country=>{
        country.cities.map(city=>arr.push((`${city},${country.country}
          `)))
      })
      setCountries(arr)

      // count++
    }

    getData()
  }, []);
  useEffect(()=>{
    const getCurrentTemp=async()=>{
      const response=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2244987df1434fd19d822236251402&q=${selectedCountry}`);
      const currentTemp = await response.json();
      setCurrentForecast(currentTemp)
    }
    getCurrentTemp()
  },[selectedCountry])

  const onSearchValue = (event)=>{
    const filteredCountries = countries.filter(country=>{
      return
      country.toLowerCase().startsWith(event.target.value.toLowerCase());
    })   
  //   const data = countries.filter(country=>country.toLowercase().
  // startsWith(e.target.value)).slice(0,4)

  setFilteredCountries(filteredCountries.slice(0,4))
  }
  // const citiesList = filteredCountries.map ((country,index)=><div key={country+index}>{country}</div>)
const selectCountry=(index)=>{
  setSelectedCountry(filteredCountries[index])
  setFilteredCountries([])
}

  return (
    <div className="relative h-screen w-screen">
       <Input onChange={onSearchValue}/>
       <div>{selectCountry}</div>

       <div>
        {filteredCountries.map((country,index)=>{
          return(
          <div onClick={()=>selectedCountry(index)} key={country + 
          index}>{country}
          </div>
          )
        })}
       </div>
    

      <div className=" flex absolute inset-0 flex-col sm:flex-row">
          <div className=" bg-gray-200 flex-1 w-1/2 sm:h-screen flex justify-center items-center">
          </div>
         
          <div className="bg-black flex-1 w-1/2 sm:h-screen flex justify-center items-center ">
           
          </div>
      </div>

      <Logo/>

      

      <div className="flex relative flex-col sm:flex-row">
          <div className="  flex-1 w-1/2 sm:h-screen flex justify-center items-center">
            <Sun />
          </div>
         
          <div className=" flex-1 w-1/2 sm:h-screen flex justify-center items-center ">
            <Moon />
          </div>
      </div>

     
    </div>
  )
}
