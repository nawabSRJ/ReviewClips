import React from 'react'
import Header from '../Components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <div class="main">
        <h1 class="sm:text-7xl text-5xl text-center sm:pt-5 pt-3 mt-10 text-emerald-600">Collecting Reviews Made Easy</h1>
        <p class="text-center p-3 my-3 text-2xl">Collect eye-catch testimonials from your clients without <span class="text-red-600">hassle</span> for design</p>
        <br />
        <div class="btns mx-auto text-center flex sm:flex-row flex-col justify-center">
          <a href={'/send-review'}><button class="text-center py-4 px-6 rounded-full text-2xl bg-emerald-400 hover:bg-emerald-600 mr-2 sm:my-0 my-3">Send Review</button></a>
          <button class="text-center py-4 px-6 rounded-full text-2xl bg-emerald-400 hover:bg-emerald-600 ml-2 sm:my-0 my-3" disabled>Receive Review</button>
        </div>
      </div>
    </div>
  )
}
