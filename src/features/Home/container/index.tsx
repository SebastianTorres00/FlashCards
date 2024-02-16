import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Home } from '../components/';
import useHome from '../hooks/useHome';

const HomeScreen = () => {
	const { cards, onPressBtn } = useHome();

	return (
		<View style={styles.container}>
			<Home cards={cards} onPressBtn={onPressBtn} />
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#22222',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default HomeScreen;
