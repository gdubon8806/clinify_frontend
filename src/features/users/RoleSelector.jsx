// Selector de roles para usuarios
export default function RoleSelector({ value, onChange, roles = [] }) {
  return (
    <select value={value} onChange={onChange} required>
      <option value="">Seleccione un rol</option>
      {roles.map(role => (
        <option key={role} value={role}>{role}</option>
      ))}
    </select>
  );
}
