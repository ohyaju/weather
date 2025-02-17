// 'use client'
// import { useEffect, useState } from "react";
// import { Input } from "./components/input";
// import { Sun } from "./components/sun";
// import { Moon } from "./components/moon";
// import { Logo } from "./components/logo"

// // let count = 0;
// export default function Home() {
//   const [countries, setCountries] = useState([]);
//   // const [searchValue, setSearchValue]=useState ('');
//   const [filteredCountries, setFilteredCountries]=useState([]);
//   // const [number,setNumber]=useState(0)
//   const [selectedCountry, setSelectedCountry]=useState('tokyo');
//   const[currentForecast, setCurrentForecast]=useState (null)

//   useEffect(() => {
//     const getData = async () => {
//       const responce = await 
//       fetch('https://countriesnow.space/api/v0.1/countries')

//       const countries = await responce.json();
//       const arr = [];
//       // countries.data.flatMap(country => console.log(country))
//       countries.data.map(country=>{
//         country.cities.map(city=>arr.push((`${city},${country.country}
//           `)))
//       })
//       setCountries(arr)

//       // count++
//     }

//     getData()
//   }, []);
//   useEffect(()=>{
//     const getCurrentTemp=async()=>{
//       const response=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2244987df1434fd19d822236251402&q=${selectedCountry}`);
//       const currentTemp = await response.json();
//       setCurrentForecast(currentTemp)
//     }
//     getCurrentTemp()
//   },[selectedCountry])

//   const onSearchValue = (event)=>{
//     const filteredCountries = countries.filter(country=>{
//       return
//       country.toLowerCase().startsWith(event.target.value.toLowerCase());
//     })   
//   //   const data = countries.filter(country=>country.toLowercase().
//   // startsWith(e.target.value)).slice(0,4)

//   setFilteredCountries(filteredCountries.slice(0,4))
//   }
//   // const citiesList = filteredCountries.map ((country,index)=><div key={country+index}>{country}</div>)
// const selectCountry=(index)=>{
//   setSelectedCountry(filteredCountries[index])
//   setFilteredCountries([])
// }

//   return (
//     <div className="relative h-screen w-screen">
//        <Input onChange={onSearchValue}/>
//        <div>{selectCountry}</div>

//        <div>
//         {filteredCountries.map((country,index)=>{
//           return(
//           <div onClick={()=>selectedCountry(index)} key={country + 
//           index}>{country}
//           </div>
//           )
//         })}
//        </div>


//       <div className=" flex absolute inset-0 flex-col sm:flex-row">
//           <div className=" bg-gray-200 flex-1 w-1/2 sm:h-screen flex justify-center items-center">
//           </div>

//           <div className="bg-black flex-1 w-1/2 sm:h-screen flex justify-center items-center ">

//           </div>
//       </div>

//       <Logo/>



//       <div className="flex relative flex-col sm:flex-row">
//           <div className="  flex-1 w-1/2 sm:h-screen flex justify-center items-center">
//             <Sun />
//           </div>

//           <div className=" flex-1 w-1/2 sm:h-screen flex justify-center items-center ">
//             <Moon />
//           </div>
//       </div>


//     </div>
//   )
// }

export default function Home() {
  return (
    <div>
      <div className="flex w-full h-screen">
        <div className="flex-1 bg-white">
          <div className="w-1/2 mx-auto border border-black">
            <div>
              <p>
                September 10, 2021
              </p>
              <h1>
                Krakow
              </h1>
            </div>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z" fill="#111111" />
                        <path d="M99.7442 32.882L86.1599 7.58993C83.6554 2.91778 78.7591 0 73.43 0H59V7.16486H59.0051C61.6673 7.16486 64.1156 8.62166 65.3673 10.9572L78.9469 36.2543C80.0827 38.3633 80.647 40.679 80.647 42.9999C80.647 45.3211 80.0827 47.6368 78.9469 49.7454L65.3673 75.0423C64.1156 77.3783 61.6673 78.8345 59.0051 78.8345H59V85.9999H73.43C78.7591 85.9999 83.6554 83.0821 86.1599 78.41L99.7442 53.1177C101.439 49.9526 102.289 46.4785 102.289 42.9999C102.289 39.5211 101.439 36.0475 99.7442 32.882Z" fill="#111111" />
                    </svg>
               
          </div>


        </div>
        <div className="flex-1 bg-black">
          right
        </div>

      </div>
    </div>
  )
}
