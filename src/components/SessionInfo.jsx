
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import '../index.css';


const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (user) {
    return (
      <div className='fundoresult'>
        <h1>Informações</h1>
        <p>Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
        <p>Photo URL: {user.photoURL}</p>
        <img src={user.photoURL} alt="User Photo" style={{ width: '300px', height: '300px' }} />

      </div>
    );
  }

  return <p>No user logged in</p>;
};

export default UserInfo;