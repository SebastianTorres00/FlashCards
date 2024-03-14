import { Text, View } from 'react-native';

const CategorySelected = ({ adapterCardSelected, titleCardSelected }) => {
	// console.log(
	// 	'----------> adapterCardSelected, titleCardSelected',
	// 	adapterCardSelected,
	// 	titleCardSelected,
	// );
	// console.log(
	// 	'----------> adapterCardSelected[titleCardSelected]',
	// 	adapterCardSelected[titleCardSelected],
	// );

	return (
		<View>
			<Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>
				{' '}
				{titleCardSelected}
			</Text>
			<View style={{ margin: 20 }}>
				{adapterCardSelected[titleCardSelected]?.map((item) => {
					return (
						<View
							style={{
								margin: 10,
								alignContent: 'center',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Text style={{ fontSize: 20 }}>Titulo : {item.title}</Text>
							<Text style={{ fontSize: 20 }}>Response : {item.response}</Text>
						</View>
					);
				})}
			</View>
		</View>
	);
};

export default CategorySelected;
