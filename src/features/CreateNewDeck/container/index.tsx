import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { CreateDeck } from '../components/';

const CreateDeckScreen = () => {
	return (
		<View style={styles.container}>
			<CreateDeck />
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

export default CreateDeckScreen;
