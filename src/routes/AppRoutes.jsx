import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from '../features/auth/LoginForm';
import Dashboard from '../features/dashboard/Dashboard';
import UserList from '../features/users/UserList';
import AppointmentList from '../features/appointments/AppointmentList';
import AppointmentReport from '../features/reports/AppointmentReport';
import ScheduleForm from '../features/schedules/ScheduleForm';
import Layout from '../components/Layout';

export default function AppRoutes() {
	const isAuthenticated = false; // TODO: conectar con AuthContext
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<LoginForm />} />
				<Route path="/" element={isAuthenticated ? <Layout><Dashboard /></Layout> : <Navigate to="/login" />} />
				<Route path="/usuarios" element={<Layout><UserList /></Layout>} />
				<Route path="/citas" element={<Layout><AppointmentList /></Layout>} />
				<Route path="/reportes" element={<Layout><AppointmentReport /></Layout>} />
				<Route path="/horarios" element={<Layout><ScheduleForm /></Layout>} />
				{/* Agrega más rutas según sea necesario */}
			</Routes>
		</Router>
	);
}
