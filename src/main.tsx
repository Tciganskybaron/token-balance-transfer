import { Buffer } from 'buffer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiProvider } from 'wagmi';

import App from './App.tsx';
import { config } from './wagmi.ts';

import './index.css';

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();

const OPEN_DEVTOOLS = import.meta.env.VITE_OPEN_DEVTOOLS === true;

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<App />
				{OPEN_DEVTOOLS && <ReactQueryDevtools initialIsOpen={false} />}
			</QueryClientProvider>
		</WagmiProvider>
	</React.StrictMode>
);
