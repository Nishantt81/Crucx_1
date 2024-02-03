import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3  gap-8 text-gray-300 size-30">
        <div>
            <h1 className= "text-[#00df9a] w-full text-3xl font-bold" >CRUCX.</h1>
            <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas rem sapiente, modi, autem nostrum officiis obcaecati ducimus facere quo voluptate animi sint perspiciatis minima suscipit enim corporis? Earum, soluta nobis!</p>
            <div className="flex justify-between md:w-[75%] my-6">
                <a href='https://www.facebook.com/nishant.mahadik.31?mibextid=ZbWKwL'><FaFacebookSquare  className = "hover:scale-125 transition duration-300 ease-in-out"  size={30}/> </a>
                <a href='https://github.com/Nishantt81'><FaGithubSquare  className = "hover:scale-125 transition duration-300 ease-in-out" size={30}/> </a>
                <a href='https://www.instagram.com/nishantmahadik?igsh=MXZzNzlocTN4NzhlZw=='><FaInstagram className = "hover:scale-125 transition duration-300 ease-in-out"  size={30} /> </a>
            </div> 
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
            <div>
                <h6 className="font-medium text-gray-400">Solutions</h6>
                <ul>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">Analytics</li>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">Marketing</li>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">Commerce</li>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">Insights</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-gray-400">Support</h6>
                <ul>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">Pricing</li>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">Documentation</li>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">Guides</li>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">API Status</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-gray-400">Company</h6>
                <ul>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">About</li>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">Blog</li>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">Jobs</li>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">Careers</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-gray-400">Legal</h6>
                <ul>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">Claim</li>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">Policy</li>
                    <li className="py-2 text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer">Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer