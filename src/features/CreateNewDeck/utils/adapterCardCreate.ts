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
	const adapterList = cardsStore[0];
	console.log('-----> VA1LUE ---->', value);
	let isCardCreated: boolean = false;
	// Object.keys(cardsStore).includes(titleCardSelected);

	cardsStore.forEach((item: object) => {
		console.log('INGLES item--->', item);
		isCardCreated = Object.keys(item).includes(titleCardSelected);
	});
	console.log('-----isCardCreated------>', isCardCreated);

	if (!cardsStore.length) {
		return createDeck(titleCardSelected, cardDetails);
	}
	if (cardsStore.length && !isCardCreated) {
		// ya hay mas de un mazo y no existe esa card
		const newDeckCreated = createDeck(titleCardSelected, cardDetails); // Solo retonra el arr con una sola posicion
		console.log('-----> newDeckCreated', newDeckCreated);
		// const newDeck = { ...cardsStore, ...newDeckCreated[titleCardSelected] };

		// console.log('LOG:: ===xxxxxxxxxxxxxxxxxx=====newDeck', newDeck);
		/*	
			debe entregar un objeto con dos objetos
			let test = {
				ingles:[
					{},
					{}
				]
			} 
		*/
		const testV1 = [...cardsStore];
		console.log('LOG:: --------> testV1 ---->', testV1);
		console.log('LOG:: --------> cardsStore ---->', cardsStore);
		console.log('LOG:: ===xxxxxxxxxxxxxxxxxx=====newDeck', [cardsStore]);
		const testv2 = { ...newDeckCreated[0], adapterList };
		console.log('LOG --------> testv2', testv2);
		return { ...newDeckCreated[0], adapterList };
	}

	if (isCardCreated) {
		// En el caso de que ya exista el Mazo , entra aca
		let cardSelected = {};

		cardsStore.forEach((data: string) => {
			console.log('LOG ---> data For each', data);

			if (Object.keys(data).includes(titleCardSelected)) {
				const dataAdapter = {
					[titleCardSelected]: [...data[titleCardSelected]],
				};

				// console.log('dataaaaaaaaa ----> ', dataAdapter);
				dataAdapter[titleCardSelected].push(cardDetails);
				cardSelected = dataAdapter;
			}
		});
		/*
			let test = {ingles:[{},{}]}
		*/
		console.log(
			'<--------------cardSelected11111111111111111111111111cardSelected----->',
			cardSelected,
		);
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
