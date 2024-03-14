import { PaperProvider } from 'react-native-paper';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { ToastProvider } from 'react-native-paper-toast';

const App = () => {
	return (
		<Provider store={store}>
			<PaperProvider>
				<ToastProvider>
					<Navigation />
				</ToastProvider>
			</PaperProvider>
		</Provider>
	);
};

export default App;
