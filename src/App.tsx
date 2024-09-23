import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { ConnectButton, DisconnectButton } from './component';

function App() {
	return (
		<>
			<ConnectButton />
			<DisconnectButton />
		</>
	);
}

export default App;
