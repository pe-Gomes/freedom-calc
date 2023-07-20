import { AiOutlineCalculator } from 'react-icons/ai'

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-700 via-gray-900 to-black">
      <header className=" flex gap-2 align-middle items-center p-4 bg-zinc-900 rounded-br-sm rounded-bl-sm ">
        <AiOutlineCalculator
          size={32}
          className="fill-slate-300 hover:fill-slate-400"
        />
        <h1 className="text-slate-500 text-lg font-bold leading-none uppercase">
          Calculadora de Execução penal
        </h1>
      </header>
      <main className="flex flex-col mx-auto my-auto h-2/3 w-1/2 bg-slate-900 rounded-xl shadow-sm border-black"></main>
    </div>
  )
}
