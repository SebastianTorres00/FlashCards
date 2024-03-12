import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { IPropsUseHome } from '../types';

const Home = ({ cardsList, onPressBtn, lengthCards }: IPropsUseHome) => {
	// console.log('Home LOG ---> cardsList', cardsList);
	// console.log('LOG ---> lengthCards', lengthCards);
	return (
		<>
			<View>
				<Text style={{ fontSize: 20 }}>You have {lengthCards} cards</Text>
				{cardsList?.map((item) => {
					console.log('test ----> Object.keys(item)[0]', Object.keys(item)[0]);
					return (
						<View
							key={Object.keys(item)[0]}
							style={{ backgroundColor: 'green' }}
						>
							<Text>{Object.keys(item)[0]}</Text>
						</View>
					);
				})}

				<Button onPress={onPressBtn} title="text" />
				<StatusBar style="auto" />
			</View>
		</>
	);
};

export default Home;
