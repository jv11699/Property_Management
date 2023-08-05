
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const LandingPage = () => {
 
  return (
    <>
    <h1>Property Management Rental Website</h1>
    <h3>by Buffalo Brothers</h3>
       <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    </>
  );
};
export default LandingPage;



