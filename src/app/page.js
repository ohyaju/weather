'use client'
import { useEffect, useState } from "react";
import { Input } from "./components/input";
import { Sun } from "./components/sun";
import { Moon } from "./components/moon";
import { Logo } from "./components/logo"

let count = 0;
export default function Home() {
  const [countries, setCountries] = useState([]);
  // const [number,setNumber]=useState(0)

  useEffect(() => {
    const getData = async () => {
      const responce = await fetch('https://countriesnow.space/api/v0.1/countries',)

      const countries = await responce.json();
      const arr = []
      countries.data.flatMap(country => console.log(country))
      // countries.data.map(country=>{
      //   country.cities.map(city=>arr.push(`${city},${country.country}
      //     `))
      // })
      setCountries(arr)

      console.log(arr)
      // count++

    }

    getData()
  }, [])

  return (
    <div className="relative h-screen w-screen">
       <Input />

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
