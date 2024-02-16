import { PaperProvider } from 'react-native-paper';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';

const App = () => {
	return (
		<Provider store={store}>
			<PaperProvider>
				<Navigation />
			</PaperProvider>
		</Provider>
	);
};

export default App;
