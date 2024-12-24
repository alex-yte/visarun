import { Button } from '@/app/ui/button';
import Menu from '../../components/menu';
import style from './page.module.css';


export default function Page(){
	return (
		<main className='bg-slate-200 dark:bg-slate-950 text-slate-900 dark:text-slate-300 h-screen flex flex-col'>
			<Menu />
			<div className='flex flex-col items-center justify-center text-[2rem] flex-grow'>
				<form className='flex flex-col items-start gap-3 p-8 border border-solid border-sky-500 rounded-3xl' action="">
					
					<h1 className='text-[2.5rem] text-slate-900 dark:text-slate-300 mb-8'>Авторизация</h1>
					
					<input 
						type="text" 
						name="" 
						id="name" 
						placeholder='Имя' 
						className='bg-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-900  dark:bg-slate-400 text-slate-900 p-3 rounded-2xl border border-slate-700 dark:border-slate-200' />
					
					<input 
						type="password" 
						name="" 
						id="pass" 
						placeholder='Пароль'
						className='bg-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-900 dark:bg-slate-400 text-slate-900 p-3 rounded-2xl border border-slate-700 dark:border-slate-200'/>
					
					<Button type='submit' variant='secondary' size='lg' className='mt-8 text-[1.5rem] flex flex-row-reverse'>Войти</Button>
				</form>
			</div>
		</main>
	);
}