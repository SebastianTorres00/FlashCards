import { View } from 'react-native';
import { CategorySelected } from '../components';
import { useCategorySelected } from '../hooks';

const CategorySelectedScreen = ({ route }) => {
	const { CardSelected } = route.params;
	const { adapterCardSelected, titleCardSelected } = useCategorySelected({
		CardSelected,
	});
	return (
		<View>
			<CategorySelected
				adapterCardSelected={adapterCardSelected}
				titleCardSelected={titleCardSelected}
			/>
		</View>
	);
};

export default CategorySelectedScreen;
