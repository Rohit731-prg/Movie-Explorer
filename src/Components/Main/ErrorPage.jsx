import React from 'react'

function ErrorPage() {
  return (
    <div className='w-full h-screen relative'>
        <div className='w-auto h-auto absolute top-1/3 left-1/4 '>
            <p className='text-6xl font-extrabold text-slate-500'>404 Movie not found</p>
            <p className='text-4xl font-medium text-slate-500 mt-4'>Try to search again with <span className='text-red-500'>proper movie name</span></p>
            <button style={{boxShadow: "0 0 10px black"}} className='mt-6 py-4 px-9 border-2 text-xl font-medium rounded-full transition-[0.3s] border-black hover:bg-black hover:text-white hover:transition-[0.3s] hover:shadow-none' onClick={() => window.location.reload()}>Go Back</button>
        </div>
    </div>
  )
}

export default ErrorPage