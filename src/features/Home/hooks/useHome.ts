import { useSelector } from 'react-redux';
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

	const onPressNavigateCardSelected = (itemValue: any) => {
		// console.log(
		// 	'LOG -----> onPressNavigateCardSelected ---> itemValue',
		// 	itemValue,
		// 	'-------> Object.keys',
		// 	Object.keys(itemValue)[0],
		// );
		const CardSelected = {
			title: Object.keys(itemValue)[0],
			...itemValue,
		};
		navigation.navigate('CategorySelected', { CardSelected });
	};

	return { cardsList, onPressBtn, lengthCards, onPressNavigateCardSelected };
};

export default useHome;
