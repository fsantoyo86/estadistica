import React from 'react'

export default function Footer() {
    return (
        <div className="flex grid grid-rows-2 justify-center text-2xl text-white items-center bg-green-700 pb-5">
            <h1 className="ml-5 my-2">Contact Us</h1>
            <form action="submit" className="flex justify-center items-center">
                <input type="text" className="mx-2 w-72"/>
                <button className="bg-gray-400 text-blue-700 text-lg py-1 px-2 rounded-sm hover:bg-gray-500">Enviar</button>
            </form>
        </div>
    )
}
