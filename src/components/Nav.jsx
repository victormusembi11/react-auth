export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export function AdminNav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/admin/dashboard">Dashboard</a>
        </li>
      </ul>
    </nav>
  );
}
