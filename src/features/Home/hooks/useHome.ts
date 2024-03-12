import { useSelector } from 'react-redux';
import { IStateListCard } from '../../../types';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

const useHome = () => {
	const cards = useSelector((state) => state.listCard.cards[0]);
	const cardsListArr: never[] = [];
	const [cardsList, setCardsList] = useState([]);
	const [lengthCards, setLengthCards] = useState(0);
	useEffect(() => {
		for (const property in cards) {
			cardsListArr.push({
				[property]: cards[property],
			});
		}
		setLengthCards(cardsListArr.length);
		setCardsList(cardsListArr);
	}, [cards]);

	const navigation = useNavigation();
	const onPressBtn = () => {
		navigation.navigate('CreateDeck');
	};
	return { cardsList, onPressBtn, lengthCards };
};

export default useHome;
