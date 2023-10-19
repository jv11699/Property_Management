import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { useState, useEffect } from 'react';
import HomeLogin from './components/HomeLogin';
import Navigation from './components/Navigation';
import awsExports from './aws-exports';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FinancialDashboard from './components/FinancialDashboard';
Amplify.configure(awsExports);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const defaultTheme = createTheme();
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

        <div>
          <Authenticator>
            {({ signOut, user }) => (
              <main>

                <Router>
                  <Navigation user={user} signOutFunc={signOut} setIsLoggedIn={setIsLoggedIn}/>
                  <Routes>
                    {/* <Route exact path="/" element={<Home/>}/> */}
                    <Route exact path="/" />
                    <Route path="/financial-dashboard" element={<FinancialDashboard />} />
                  </Routes>

                </Router>
              </main>
            )}
          </Authenticator>
        </div>
      </ThemeProvider>
    </>
  );
}
