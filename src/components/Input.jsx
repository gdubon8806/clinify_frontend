// Input reutilizable
export default function Input({ label, ...props }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && <label style={{ display: 'block', marginBottom: 4 }}>{label}</label>}
      <input {...props} />
    </div>
  );
}
