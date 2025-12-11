// Layout general con header y sidebar
export default function Layout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 220, background: '#f5f5f5', padding: 16 }}>
        <h2>Clinify</h2>
        {/* Aquí iría la navegación */}
      </aside>
      <main style={{ flex: 1, padding: 24 }}>{children}</main>
    </div>
  );
}
