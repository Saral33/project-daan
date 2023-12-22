import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import { Sepolia } from '@thirdweb-dev/chains';
import './styles/globals.css';
import { Toaster } from 'react-hot-toast';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={Sepolia}
      clientId={'ba812b0f7e7a03fa738eed6678956ad7'}
    >
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
              color: 'white',
              textTransform: 'capitalize',
            },
          },
        }}
      />
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
