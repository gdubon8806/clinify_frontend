export default function AppointmentReport() {
	// Simulación de datos
	const report = [
		{ id: 1, department: 'Pediatría', date: '2025-12-12', count: 5 },
		{ id: 2, department: 'Cardiología', date: '2025-12-12', count: 3 },
	];
	return (
		<div>
			<h2>Reporte de Citas por Departamento</h2>
			<table border="1" cellPadding="8">
				<thead>
					<tr>
						<th>Departamento</th>
						<th>Fecha</th>
						<th>Cantidad</th>
					</tr>
				</thead>
				<tbody>
					{report.map(r => (
						<tr key={r.id}>
							<td>{r.department}</td>
							<td>{r.date}</td>
							<td>{r.count}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
