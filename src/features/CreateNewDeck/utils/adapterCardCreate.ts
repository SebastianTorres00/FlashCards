import { IDetailsCards } from '../../../store/listSlice/homeSlice';

interface ICardProps {
	cardDetails: IDetailsCards;
	titleCardSelected: string;
	cardsStore: any; // cualquier array
}

const createDeck = (titleCardSelected: string, cardDetails: IDetailsCards) => {
	const listCard = [];
	listCard[titleCardSelected] = [];

	listCard[titleCardSelected].push(cardDetails);

	return listCard;
};

const adapterCardCreate = (value: ICardProps) => {
	const { titleCardSelected, cardDetails, cardsStore } = value;
	console.log('-----> VALUE ---->', value);
	let isCardCreated = false;

	cardsStore.forEach((item: object) => {
		console.log('item ', item);
		console.log(
			'Object.keys(item).includes(titleCardSelected) ',
			Object.keys(item).includes(titleCardSelected),
		);
		isCardCreated = Object.keys(item).includes(titleCardSelected);
	});
	console.log('----------->', isCardCreated);

	if (!cardsStore.length) {
		return createDeck(titleCardSelected, cardDetails);
	}
	console.log(
		'cardsStore.length && !isCardCreated',
		cardsStore.length && !isCardCreated,
	);
	console.log(
		'cardsStore.length , !isCardCreated',
		cardsStore.length,
		!isCardCreated,
	);

	if (cardsStore.length && !isCardCreated) {
		// ya hay mas de un mazo y no existe esa card
		const newDeckCreated = createDeck(titleCardSelected, cardDetails); // Solo retonra el arr con una sola posicion
		console.log('-----> cardsStore', cardsStore);
		console.log(
			'newDeckCreated[titleCardSelected]',
			newDeckCreated[titleCardSelected],
		);

		debugger;
		const newDeck = { ...cardsStore, ...newDeckCreated[titleCardSelected] };
		console.log('-----> newDeck', newDeck);
		debugger;
		console.log(
			'LOG:: newDeckCreated[titleCardSelected]',
			newDeckCreated[titleCardSelected],
		);
		console.log('LOG:: ===xxxxxxxxxxxxxxxxxx=====');
		return newDeck;
	}

	if (isCardCreated) {
		let cardSelected = {};

		cardsStore.forEach((data: string) => {
			if (Object.keys(data).includes(titleCardSelected)) {
				const dataAdapter = {
					[titleCardSelected]: [...data[titleCardSelected]],
				};

				console.log('dataaaaaaaaa ----> ', dataAdapter);
				dataAdapter[titleCardSelected].push(cardDetails);
				cardSelected = dataAdapter;
			}
		});
		console.log('cardSelected----->', cardSelected);
		return cardSelected;
	}
};

export default adapterCardCreate;

/*
const listCards = {
  cards : [ 
    {
      ingles: [
        {
          title: {0: "tilteV1"},
          response: "detail response"
        },|
      ],
      test: [
        {
          title: {0: "tilteV1"},
          response: "detail response"
        },
      ]
    }
  ]
}
console.log(
listCards.cards.map((item) => 
                    console.log(
                                "item",
                                Object.keys(item), // Ingles- test
                                "x",item.ingles[0],"x"// .title
                               )
            )
)
*/
