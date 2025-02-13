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
    <div>
      <Input />
      <div className="relative flex justify-center items-center h-screen w-screen">

        <div className="flex relative w-full h-full">


          <div className="w-1/2 bg-gray-200 flex justify-center items-center">


            <Sun />
          </div>
          <Logo />

          <div className="bg-black w-1/2 flex justify-center items-center">
            <Moon />
          </div>
        </div>
      </div>
    </div>
  )
}
