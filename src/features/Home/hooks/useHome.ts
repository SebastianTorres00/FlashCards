import { useSelector } from 'react-redux';
import { IStateListCard } from '../../../types';
import { useNavigation } from '@react-navigation/native';

const useHome = () => {
	const { cards } = useSelector((state: IStateListCard) => state.listCard);
	const navigation = useNavigation();
	const onPressBtn = () => {
		navigation.navigate('CreateDeck');
	};
	return { cards, onPressBtn };
};

export default useHome;
