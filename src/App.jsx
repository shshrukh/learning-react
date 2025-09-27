import { useState } from 'react'
import Button from './Button'

function App() {
  const [color, setColor] = useState("olive");
  const style = {
    backgroundColor: color
  }

  return (
    <>
      <div className='w-full h-screen duration-300 ' style={style}>
      </div>
      <div className='flex flex-wrap justify-center h-6 fixed bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap bg-white justify-center gap-1 px-3 py-2 rounded-2xl'>
          <button className='text-black font-bold rounded-2xl  px-2 py-3 outline-none' style={{ backgroundColor: "olive" }} onClick={()=>setColor("olive")}>Olive</button>
          <button className='text-black font-bold rounded-2xl  px-2 py-3 outline-none' style={{ backgroundColor: "red" }} onClick={()=>setColor("red")}>Red</button>
          <button className='text-black font-bold rounded-2xl  px-2 py-3 outline-none' style={{ backgroundColor: "green" }} onClick={()=>setColor("green")}>Green</button>
          <button className='text-black font-bold rounded-2xl  px-2 py-3 outline-none' style={{ backgroundColor: "Pink" }} onClick={()=>setColor("pink")}>Pink</button>
          <button className='text-black font-bold rounded-2xl  px-2 py-3 outline-none' style={{ backgroundColor: "blue" }} onClick={()=>setColor("blue")}>Blue</button>
          <button className='text-black font-bold rounded-2xl  px-2 py-3 outline-none' style={{ backgroundColor: "Gray" }} onClick={()=>setColor("gray")}>Gray</button>
          <button className='text-black font-bold rounded-2xl  px-2 py-3 outline-none' style={{ backgroundColor: "orange" }} onClick={()=>setColor("orange")}>Orange</button>
        </div>
      </div>
    </>
  )
}

export default App
