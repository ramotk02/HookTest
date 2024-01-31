import React, {useEffect, useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => console.log("test"), [])
    // useEffect(()=> console.log("test2"))
    // useEffect(()=> console.log("test3"), [count])
    return (
      <div className='h-[700px] flex justify-center items-center '>
        <button onClick={() => setCount(count - 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 opacity-75 h-[60px] w-[100px] flex justify-center items-center">-</button>
        <p className='text-3xl'>{count}</p>
        <button onClick={() => setCount(count + 1)}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 opacity-75 h-[60px] w-[100px] flex justify-center items-center">+</button>
      </div>
    );

}

export default Counter