import Home from './home'; // Import the Home component properly
import Menu from './components/menu';

// This function is a server component
export default async function Page() {
  
  return (
    <section className='bg-slate-200 dark:bg-slate-950 text-slate-900 dark:text-slate-300 h-screen flex flex-col'>
      <Menu/>
      <Home/>
    </section>

  )

}
