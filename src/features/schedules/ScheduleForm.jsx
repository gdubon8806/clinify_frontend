import Input from '../../components/Input';
import Button from '../../components/Button';

export default function ScheduleForm() {
	return (
		<form style={{ maxWidth: 320, margin: '40px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
			<h2>Registrar Horario</h2>
			<Input label="Día" name="day" required />
			<Input label="Hora inicio" name="start" type="time" required />
			<Input label="Hora fin" name="end" type="time" required />
			<Button type="submit">Guardar</Button>
		</form>
	);
}
