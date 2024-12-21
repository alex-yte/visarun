import Home from './home'; // Import the Home component properly
import Menu from './components/menu';

// This function is a server component
export default async function Page() {
  
  return (
    <section className='bg-slate-400'>
      <Menu/>
      <Home/>
    </section>

  )

}
