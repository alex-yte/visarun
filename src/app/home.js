'use client';
import Link from "next/link";

export default function Home({ data }) {
  function getLastDay() {
    let initialDate = document.getElementById('date').value;
    let dateObject = new Date(initialDate);
    dateObject.setDate(dateObject.getDate() + 29);

    const monthNames = [
      'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
      'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
    ];

    let day = dateObject.getDate().toString();
    let month = dateObject.getMonth();
    let monthName = monthNames[month];
    let year = dateObject.getFullYear();

    let newDateFormatted = `${day} ${monthName} ${year}`;

    document.getElementById('dateOutput').textContent = newDateFormatted;

    let today = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = dateObject - today;

    // Calculate the days difference by converting milliseconds to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById('daysOutput').textContent = daysDifference;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-10">
      <section className='container text-center'>
        <h1>Калькулятор безвиза с Сербией</h1>
      </section>
      
      <section className="flex flex-col items-center gap-4 p-4 border-solid border-2 border-sky-500 rounded-3xl">
        <label className="text-center" htmlFor="date">
          День въезда в Сербию. Он считается за первый день.
        </label>
        <input 
          className="block border-solid border-2 border-sky-500 rounded-2xl text-gray-500 p-1" 
          id="date" 
          type="date" 
          onChange={getLastDay}></input>
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
