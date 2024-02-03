import React , {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [Nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!Nav)
    }
  return (
    <div className=" flex justify-between items-center mx-auto h-24 px-4  max-w-[1240px] text-white">
        <h1 className= "text-[#00df9a] w-full text-3xl font-bold" >CRUCX.</h1>
        <ul className="hidden md:flex">
            <li className="p-4 cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out hover:scale-110">Home</li>
            <li className="p-4 cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out hover:scale-110">Company</li>
            <li className="p-4 cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out hover:scale-110">Resources</li>
            <li className="p-4 cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out hover:scale-110">About</li>
            <li className="p-4 cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out hover:scale-110">Contact</li>
        </ul>
        <div  onClick={handleNav} className=" block md:hidden">
            {Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        <div className= {Nav ?"fixed left-0 top-0  border-r border-r-gray-900 h-full w-[60%] bg-[#000300] ease-in-out duration-300" :"fixed left-[100%] " }>
            <h1 className= "text-[#00df9a] w-full text-3xl font-bold m-4" >CRUCX.</h1>
            <ul className="uppercase p-4">
                <li className="p-4 cursor-pointer border-b border-gray-600 hover:bg-gray-500 transition duration-300 ease-in-out hover:scale-110">Home</li>
                <li className="p-4 cursor-pointer border-b border-gray-600 hover:bg-gray-500 transition duration-300 ease-in-out hover:scale-110">Company</li>
                <li className="p-4 cursor-pointer border-b border-gray-600 hover:bg-gray-500 transition duration-300 ease-in-out hover:scale-110">Resources</li>
                <li className="p-4 cursor-pointer border-b border-gray-600 hover:bg-gray-500 transition duration-300 ease-in-out hover:scale-110">About</li>
                <li className="p-4 cursor-pointer hover:bg-gray-500 transition duration-300 ease-in-out hover:scale-110">Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar