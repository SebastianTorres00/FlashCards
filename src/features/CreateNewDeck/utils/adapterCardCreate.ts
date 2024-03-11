import { IDetailsCards } from '../../../store/listSlice/homeSlice';

interface ICardProps {
	cardDetails: IDetailsCards;
	titleCardSelected: string;
	cardsStore: any; // cualquier array
}

const createDeck = (titleCardSelected: string, cardDetails: IDetailsCards) => {
	const listCard: never[] = [];
	listCard[titleCardSelected] = [];

	listCard[titleCardSelected].push(cardDetails);

	return listCard;
};

const adapterCardCreate = (value: ICardProps) => {
	const { titleCardSelected, cardDetails, cardsStore } = value;
	console.log('LOG ----> cardsStore', cardsStore);
	console.log('LOG ----> value', value);

	let adapterList = cardsStore[0];
	let isCardCreated: boolean = false;
	cardsStore.forEach((item: object) => {
		isCardCreated = Object.keys(item).includes(titleCardSelected);
	});
	// console.log('-----isCardCreated------>', isCardCreated);

	if (!cardsStore.length) {
		return createDeck(titleCardSelected, cardDetails);
	}
	if (cardsStore.length && !isCardCreated) {
		// ya hay mas de un mazo y no existe esa card
		const newDeckCreated = createDeck(titleCardSelected, cardDetails); // Solo retonra el arr con una sola posicion

		const newDeckAdapt = { ...newDeckCreated };
		return {
			...newDeckAdapt,
			...adapterList,
		};
	}

	if (isCardCreated) {
		// En el caso de que ya exista el Mazo , entra aca
		let cardSelected = {};

		cardsStore.forEach((data: string) => {
			// console.log('LOG ---> data For each', data);
			// console.log('LOG ---> data.length', data.length);
			cardsNumers = data.length;
			if (Object.keys(data).includes(titleCardSelected)) {
				const dataAdapter = {
					[titleCardSelected]: [...data[titleCardSelected]],
				};
				dataAdapter[titleCardSelected].push(cardDetails);
				cardSelected = dataAdapter;
			}
		});

		const listTitleCards = [];
		for (const cardsTitles in adapterList) {
			listTitleCards.push(cardsTitles);
		}
		let cardsNumers = listTitleCards.length;

		if (cardsNumers >= 1) {
			const listCards = [];
			for (const property in adapterList) {
				if (property !== titleCardSelected) {
					listCards.push({ [property]: adapterList[property] });
				}
			}
			adapterList = { ...cardSelected };
			const cardAdapt = listCards[0];

			return {
				...cardSelected,
				...cardAdapt,
			};
		}
		return cardSelected;
	}
};

export default adapterCardCreate;
