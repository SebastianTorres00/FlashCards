import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import createDeckStyle from './createDeckStyle';

interface ItextInputID {
	textInputID: string;
}

const CreateDeckSecondStep = ({
	onChangeSteps,
	titleCard,
	listTextInput,
	createMoreInputs,
	onChangeResponse,
	onSubmitCard,
	onChangeTitle,
	onShowModal,
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
				onPress={onChangeSteps}
			>
				<Text style={{ fontSize: 20 }}>{textGoBack}</Text>
			</TouchableOpacity>

			<Text style={{ fontSize: 40, textAlign: 'center' }}>{titleCard}</Text>
			<Text style={{ fontSize: 30 }}>(!)</Text>
			{listTextInput?.map(({ textInputID }: ItextInputID) => (
				<TextInput
					key={textInputID}
					style={{
						borderColor: '#000',
						borderWidth: 1,
						borderRadius: 12,
						padding: 8,
					}}
					onChangeText={onChangeTitle}
					placeholder="Pregunta Frontal"
				/>
			))}
			<TouchableOpacity onPress={createMoreInputs}>
				<Text style={{ fontSize: 30 }}>+</Text>
			</TouchableOpacity>
			<Text>Respuesta</Text>
			<TextInput
				style={{
					borderColor: '#000',
					borderWidth: 1,
					borderRadius: 12,
					padding: 8,
				}}
				onChangeText={onChangeResponse}
				placeholder="Tu texto"
			/>

			<TouchableOpacity
				onPress={onSubmitCard}
				style={{ backgroundColor: '#3333', top: '15%' }}
			>
				<Text style={{ fontSize: 20, textAlign: 'center' }}>Nombre BTN</Text>
			</TouchableOpacity>
			<View
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderColor: '#000',
					borderWidth: 1,
					borderRadius: 12,
					padding: 8,
					height: '40%',
					width: '80%',
					position: 'absolute',
					backgroundColor: '#444',
				}}
			>
				<TouchableOpacity
					style={{ backgroundColor: '#333', padding: 5, margin: 5 }}
				>
					<Text style={{ textAlign: 'center' }}>Crear nueva Card</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ backgroundColor: '#3333', padding: 5 }}
					onPress={onShowModal}
				>
					<Text>Finalizar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CreateDeckSecondStep;
