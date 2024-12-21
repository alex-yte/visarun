// 'use client';
// import Link from "next/link";

import { DatePicker } from "./components/datepicker";

export default function Home({ data }) {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-10">
      <section className='container text-center'>
        <h1>Калькулятор безвиза с Сербией</h1>
      </section>
      
      <section className="flex flex-col items-center p-4 border-solid border-2 border-sky-500 rounded-3xl">
        <p className="text-center mb-0">
          День въезда в Сербию.
        </p>
        <p className="text-center mb-4">
          Он считается за первый день.
        </p>
        {/* <input 
          className="block border-solid border-2 border-sky-500 rounded-2xl text-gray-500 p-1" 
          id="date" 
          type="date" 
          onChange={getLastDay}></input> */}
        <DatePicker />
      </section>

      <section className="w-100 flex flex-col items-center gap-4 p-4 border-solid border-2 border-sky-500 rounded-3xl">
        <p>Последний день для визарана:</p>
        <p id="dateOutput"></p>
      </section>
      
      <section className="w-100 flex flex-col items-center gap-4 p-4 border-solid border-2 border-sky-500 rounded-3xl">
        <p>Дней до визарана:</p>
        <p id="daysOutput"></p>
      </section>
    </main>
  );
}
