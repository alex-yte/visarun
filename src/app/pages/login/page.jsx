import Menu from "../../components/menu"
import { ClerkProvider, SignIn, SignUp } from "@clerk/nextjs"
import { ruRU } from "@clerk/localizations"

const page = ({Component, pageProps}) => {
  return (
	<ClerkProvider localization={ruRU}>
		<main className='bg-slate-200 dark:bg-slate-950 text-slate-900 dark:text-slate-300 h-screen flex flex-col'>
			<Menu />
			<div className="flex flex-col items-center justify-center text-[2rem] flex-grow">
				<SignUp 
					
					appearance={{
						elements:{
							cardBox: 'w-[80vw] max-w-[400px] border border-solid border-sky-500 rounded-3xl',
							card: 'dark:bg-slate-700 gap-3 p-4 sm:p-8',
							headerTitle: 'text-slate-900 dark:text-slate-300 mb-1 sm:mb-4',
							headerSubtitle: 'text-slate-900 dark:text-slate-300 mb-1 sm:mb-4',
						}
					}} 
					routing="hash" 
				/>
			</div>
			{/* <div className='flex flex-col items-center justify-center text-[2rem] flex-grow'>

					

				<form className='flex flex-col items-start gap-3 p-8 border border-solid border-sky-500 rounded-3xl' action="">
					
					<h1 className='text-[2.5rem] text-slate-900 dark:text-slate-300 mb-8'>Регистация</h1>
					
					<input 
						type="text" 
						name="" 
						id="name" 
						placeholder='Имя' 
						className='bg-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-900  dark:bg-slate-400 text-slate-900 p-3 rounded-2xl border border-slate-700 dark:border-slate-200' 
						required
						/>
					
					<input 
						type="password" 
						name="" 
						id="pass" 
						placeholder='Пароль'
						className='bg-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-900 dark:bg-slate-400 text-slate-900 p-3 rounded-2xl border border-slate-700 dark:border-slate-200'
						required
						/>
					
					<div className="flex justify-between w-full">
						<Button type='submit' variant='secondary' size='lg' className='mt-8 text-[1.5rem]'>
							Отправить
						</Button>
						<Link href='/pages/login' className='text-slate-900 dark:text-slate-300 text-[1.5rem] mt-4 flex items-center gap-2'>
							Авторизация
						</Link>
					</div>
				</form>


			</div> */}
		</main>
	</ClerkProvider>
  )
}

export default page