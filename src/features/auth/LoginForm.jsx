import Input from '../../components/Input';
import Button from '../../components/Button';

export default function LoginForm() {
  return (
    <form style={{ maxWidth: 320, margin: '80px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2>Iniciar sesión</h2>
      <Input label="Correo" type="email" name="email" required />
      <Input label="Contraseña" type="password" name="password" required />
      <Button type="submit">Entrar</Button>
    </form>
  );
}
