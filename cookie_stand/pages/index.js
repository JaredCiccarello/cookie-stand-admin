import Head from 'next/head';
import { useState } from "react";

export default function Home(){
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.0/tailwind.min.css" rel="stylesheet" />
      </Head>
      <header class="bg-green-500 text-white p-4">
        <h1 class="text-3xl">Cookie Stand Admin</h1>
      </header>
      <body>
      
          <main class="bg-green-100 p-4">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h1 class="text-2xl">Create Cookie Stand</h1>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="location">
                  Location
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="minimum-customers-per-hour">
                  
                  Minimum Customers per Hour
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="maximum-customers-per-hour">

                  Maximum Customers per Hour
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="average-cookies-per-sale">

                  Average Cookies per Sale
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Create
              </button>
            </form>
          </main>
        
      </body>
      <footer class="bg-green-500 text-white p-4 fixed bottom-0 w-full">
        <p>Jared Ciccarello &copy; 2023</p>
      </footer>
      
    </div>
  )
}