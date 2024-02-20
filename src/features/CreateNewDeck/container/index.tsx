import { StyleSheet, View } from 'react-native';
import { CreateDeck } from '../components/';
import useCreateCards from '../hooks/useCreateCards';
import CreateDeckSecondStep from '../components/CreateDeckSecondStep';
import { useNavigation } from '@react-navigation/native';

const CreateDeckScreen = () => {
	const {
		titleCard,
		onChangeTitleCards,
		step,
		onChangeSteps,
		listTextInput,
		createMoreInputs,
		onChangeResponse,
		onSubmitCard,
		onChangeTitle,
		onShowModal,
		showModal,
	} = useCreateCards();
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			{(() => {
				switch (step) {
					case '1':
						return (
							<CreateDeck
								titleCard={titleCard}
								onChangeTitleCards={onChangeTitleCards}
								onChangeSteps={onChangeSteps}
								navigation={navigation}
							/>
						);
					default:
						return (
							<CreateDeckSecondStep
								titleCard={titleCard}
								onChangeSteps={onChangeSteps}
								listTextInput={listTextInput}
								createMoreInputs={createMoreInputs}
								onChangeResponse={onChangeResponse}
								onSubmitCard={onSubmitCard}
								onChangeTitle={onChangeTitle}
								onShowModal={onShowModal}
								showModal={showModal}
							/>
						);
				}
			})()}
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
