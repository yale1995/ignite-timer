export function Home() {
	return (
		<div>
			<form>
				<label htmlFor="task">Vou trabalhar em</label>
				<input
					type="text"
					id="task"
					placeholder="Dê um nome para o seu projeto"
				/>
				<label htmlFor="minutesAmount">durante</label>
				<input type="number" id="minutesAmount" placeholder="00" />
				<span>minutos.</span>
			</form>
		</div>
	);
}
