import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className='w-full h-screen bg-black overflow-auto hover:bg-slate-400 transition-colors delay-200'><a href="/home"> James</a></div>
      <div className='w-full h-screen bg-green-200 overflow-auto'></div>
      <div className='w-full h-screen bg-yellow-200 overflow-auto'></div>
      <div className='w-full h-screen bg-purple-200 overflow-auto'></div>
      <div className='w-full h-screen bg-gray-200 overflow-auto'></div>
    </main>
  )
}
