import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../features/Home/container';
import CreateDeckScreen from '../features/CreateNewDeck/container';
import CategorySelectedScreen from '../features/CategorySelected/container/CategorySelectedScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="CreateDeck"
					component={CreateDeckScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="CategorySelected"
					component={CategorySelectedScreen}
					options={{ headerShown: true }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
