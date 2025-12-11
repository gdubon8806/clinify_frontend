export default function Notification({ message }) {
	if (!message) return null;
	return (
		<div style={{ background: '#e0ffe0', border: '1px solid #b2ffb2', padding: 12, borderRadius: 6, margin: '12px 0' }}>
			<strong>Notificación:</strong> {message}
		</div>
	);
}
