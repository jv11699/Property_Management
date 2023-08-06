import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { useState, useEffect } from 'react';
import HomeLogin from './components/HomeLogin';
import Navigation from './components/Navigation';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkUser();
  }, []);
  return (
    <>
      {!isLoggedIn && <HomeLogin />}
      <div>
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              <Navigation user={user} signOutFunc={signOut} setIsLoggedIn={setIsLoggedIn}/>
            </main>
          )}
        </Authenticator>
      </div>
    </>
  );
}