'use client'
import { useEffect, useState } from "react";
let count = 0;
export default function Home() {
  const [countries,setCountries]=useState([]);
  const [number,setNumber]=useState(0)
  useEffect(()=>{

  },[])
const getData = async ()=> {
  const responce = await fetch  ('https://countriesnow.space/api/v0.1/countries',)

  const countries = await responce.json();
  setCountries(countries.data)

  console.log(countries)
  count++

}  
  
getData ()

  return (
    <div>
      <Search />
    </div>
  );
}



function Search() {
  return (
    <div>
      <div className="bg-white text-black-200 pb-200">
        <input placeholder="Search" className="w-full outline-none text-gray-600 text-lg placeholder:font-bold text-[32px]" ></input>
      </div>
      <div className="relative flex justify-center items-center h-screen w-screen">

        <div className="flex relative w-full h-full">

          <div className="w-1/2 bg-gray-200 flex justify-center items-center">

            <div className=" rounded-lg bg-white h-[828px] w-[414px]">

              <div className="mt-10 mx-10 flex">
                <div>
                  <p className="text-[18px]">February 11, 2025</p>
                  <h1 className="text-[48px] md:font-bold">UlanBator</h1>
                </div>
                <img src="location.svg" className="ml-20" />
              </div>
              <div className="flex justify-center mt-30">
                <img src="sun.webp" alt='sun' width={274} height={274} />
              </div>
              <h1 className="text-[120px] ml-10 mt-10">26</h1>
              <h1 className="ml-10 text-orange-500 md:font-bold text-[30px]">Bright</h1>
              <div className="flex justify-center gap-12 mt-20">
                <img src="Home.svg" />
                <img src="location.svg" />
                <img src="Heart.svg" />
                <img src="User.svg" />

              </div>
            </div>
          </div>

          <div className="bg-red-500 w-100 h-screen">
            <div className="absolute inset-0 flex justify-center items-center">
              <svg width="103" height="86" viewBox="0 0 103 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z" fill="#111111" />
                <path d="M99.7442 32.882L86.1599 7.58993C83.6554 2.91778 78.7591 0 73.43 0H59V7.16486H59.0051C61.6673 7.16486 64.1156 8.62166 65.3673 10.9572L78.9469 36.2543C80.0827 38.3633 80.647 40.679 80.647 42.9999C80.647 45.3211 80.0827 47.6368 78.9469 49.7454L65.3673 75.0423C64.1156 77.3783 61.6673 78.8345 59.0051 78.8345H59V85.9999H73.43C78.7591 85.9999 83.6554 83.0821 86.1599 78.41L99.7442 53.1177C101.439 49.9526 102.289 46.4785 102.289 42.9999C102.289 39.5211 101.439 36.0475 99.7442 32.882Z" fill="#111111" />
              </svg>

            </div>
          </div>

          <div className="bg-black w-1/2 flex justify-center items-center">
            <div className="rounded-lg bg-blue-950 h-[828px] w-[414px]">
              <div className="mt-10 mx-10 flex">
                <div>
                  <p className="text-[18px]">February 11, 2025</p>
                  <h1 className="text-[48px] md:font-bold">UlanBator</h1>
                </div>
                <img src="location.svg" className="ml-20" />
              </div>
              <div className="flex justify-center mt-30">
                <img src="moon.webp" alt='sun' width={274} height={274} />
              </div>
              <h1 className="text-[120px] ml-10 mt-10">17</h1>
              <h1 className="ml-10 text-purple-600 md:font-bold text-[30px]">Clear</h1>
              <div className="flex justify-center gap-12 mt-20">
                <img src="Home.svg" />
                <img src="location.svg" />
                <img src="Heart.svg" />
                <img src="User.svg" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
