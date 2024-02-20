import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import createDeckStyle from './createDeckStyle';

const CreateDeck = ({
	onChangeTitleCards,
	titleCard,
	onChangeSteps,
	navigation,
}) => {
	const textGoBack = '<-------';

	return (
		<View style={createDeckStyle.container}>
			<TouchableOpacity
				style={{
					width: 50,
					height: 50,
					backgroundColor: 'powderblue',
				}}
				onPress={() => navigation.navigate('Home')}
			>
				<Text style={{ fontSize: 20 }}>{textGoBack}</Text>
			</TouchableOpacity>
			<Text style={{ fontSize: 20 }}>PANTALLA CREAR CARDS</Text>
			<TextInput
				onChangeText={onChangeTitleCards}
				value={titleCard}
				placeholder="Texto Plasholder" // Ir modificando
				style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
			/>
			<TouchableOpacity
				style={{
					backgroundColor: 'powderblue',
				}}
				onPress={onChangeSteps}
			>
				<Text style={{ fontSize: 20 }}>Crea tus cards</Text>
			</TouchableOpacity>
			<StatusBar style="auto" />
		</View>
	);
};

export default CreateDeck;
