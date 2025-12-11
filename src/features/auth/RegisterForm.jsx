import Input from '../../components/Input';
import Button from '../../components/Button';

export default function RegisterForm() {
  return (
    <form style={{ maxWidth: 320, margin: '80px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2>Registrar usuario</h2>
      <Input label="Nombre" name="name" required />
      <Input label="Correo" type="email" name="email" required />
      <Input label="Contraseña" type="password" name="password" required />
      <Button type="submit">Registrar</Button>
    </form>
  );
}
