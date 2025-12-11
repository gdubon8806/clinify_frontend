export default function AppointmentList() {
	// Simulación de datos
	const appointments = [
		{ id: 1, patient: 'Pedro', date: '2025-12-12', hour: '10:00', type: 'Consulta' },
		{ id: 2, patient: 'María', date: '2025-12-12', hour: '11:00', type: 'Control' },
	];
	return (
		<div>
			<h2>Citas</h2>
			<table border="1" cellPadding="8">
				<thead>
					<tr>
						<th>Paciente</th>
						<th>Fecha</th>
						<th>Hora</th>
						<th>Tipo</th>
					</tr>
				</thead>
				<tbody>
					{appointments.map(a => (
						<tr key={a.id}>
							<td>{a.patient}</td>
							<td>{a.date}</td>
							<td>{a.hour}</td>
							<td>{a.type}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
