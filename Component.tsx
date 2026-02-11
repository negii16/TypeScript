import { useState } from "react";

interface User {
  name: string;
  age: number;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);

  function loadUser() {
    setUser({ name: "Anjali", age: 22 });
  }

  return (
    <div>
      <button onClick={loadUser}>Load User</button>

      {user && (
        <p>
          {user.name} is {user.age} years old
        </p>
      )}
    </div>
  );
}
