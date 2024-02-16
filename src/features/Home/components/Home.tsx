import { StatusBar } from 'expo-status-bar';
import { Button, Text } from 'react-native';
import { IPropsUseHome } from '../types';

const Home = ({ cards, onPressBtn }: IPropsUseHome) => {
	return (
		<>
			<Text style={{ fontSize: 20 }}>You have {cards?.length} cards</Text>
			<Button onPress={onPressBtn} title="text" />
			<StatusBar style="auto" />
		</>
	);
};

export default Home;
