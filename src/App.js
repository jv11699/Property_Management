import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { useState, useEffect } from 'react';
import HomeLogin from './components/HomeLogin';
import Navigation from './components/Navigation';
import awsExports from './aws-exports';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
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
     <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {!isLoggedIn &&  <LandingPage />}

      <div>
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              <Navigation user={user} signOutFunc={signOut} setIsLoggedIn={setIsLoggedIn}/>
            </main>
          )}
        </Authenticator>
      </div>
      </ThemeProvider>
    </>
  );
}
