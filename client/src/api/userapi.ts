import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

function ProfilePage() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<User>('http://localhost:3000/users/1');
      setUser(response.data);
    }

    fetchData();
  }, []);

  if (!user) {
    return `<div>Loading...</ div>`;
  }

  return (
    `<div>
      <h1>{user.firstName} {user.lastName}</h1>
      <p>{user.email}</p>
    </div>`
  );
}
