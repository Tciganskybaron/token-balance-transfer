import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { ConnectButton, DisconnectButton, BoxCoin } from './component';

function App() {
	return (
		<>
			<ConnectButton />
			<DisconnectButton />
			<BoxCoin />
		</>
	);
}

export default App;
