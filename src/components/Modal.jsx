// Modal reutilizable
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ background: '#fff', padding: 24, borderRadius: 8, minWidth: 300 }}>
        <button style={{ float: 'right' }} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}
