import Menu from '../../components/menu';
import style from './page.module.css';


export default function Page(){
	return (
		<main>
			<Menu />
			<div className={style.page + ' ' + 'flex min-h-screen flex-col items-center justify-center gap-8 p-10'}>
				<form className={style.form} action="">
					<label htmlFor="name">Name</label>
					<input type="text" name="" id="name" />
					<label htmlFor="pass">Pass</label>
					<input type="password" name="" id="pass" />
					<label htmlFor="submit">Submit</label>
					<input type="submit" value="" id="submit" />
				</form>
			</div>
		</main>
	);
}