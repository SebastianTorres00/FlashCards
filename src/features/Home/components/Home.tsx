import { StatusBar } from 'expo-status-bar';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { IPropsUseHome } from '../types';

const Home = ({
	cardsList,
	onPressBtn,
	lengthCards,
	onPressNavigateCardSelected,
}: IPropsUseHome) => {
	return (
		<>
			<View>
				<Text style={{ fontSize: 20 }}>You have {lengthCards} cards</Text>
				{cardsList?.map((item) => {
					return (
						<View key={Object.keys(item)[0]} style={{ margin: 5 }}>
							<TouchableOpacity
								onPress={() => {
									onPressNavigateCardSelected(item);
								}}
								style={{
									borderColor: '#000',
									borderWidth: 2,
									borderRadius: 12,
									backgroundColor: 'green',
								}}
							>
								<Text
									style={{
										textAlign: 'center',
										padding: 10,
										fontSize: 20,
										fontWeight: 'bold',
									}}
								>
									{Object.keys(item)[0]}
								</Text>
							</TouchableOpacity>
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
