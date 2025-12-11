import RoleSelector from './RoleSelector';

export default function UserList() {
	// Simulación de datos
	const users = [
		{ id: 1, name: 'Dr. Juan', email: 'juan@clinify.com', role: 'Doctor' },
		{ id: 2, name: 'Admin Ana', email: 'ana@clinify.com', role: 'Administrador' },
	];
	return (
		<div>
			<h2>Usuarios</h2>
			<table border="1" cellPadding="8">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Correo</th>
						<th>Rol</th>
					</tr>
				</thead>
				<tbody>
					{users.map(u => (
						<tr key={u.id}>
							<td>{u.name}</td>
							<td>{u.email}</td>
							<td>{u.role}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
