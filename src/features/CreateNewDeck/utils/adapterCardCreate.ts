import { IDetailsCards } from '../../../store/listSlice/homeSlice';

interface ICardProps {
	cardDetails: IDetailsCards;
	titleCardSelected: string;
	cardsStore: any; // cualquier array
}

const adapterCardCreate = (value: ICardProps) => {
	const { titleCardSelected, cardDetails, cardsStore } = value;
	console.log('-----> VALUE ---->', value);
	let listCard = [];

	if (!cardsStore.length) {
		listCard[titleCardSelected] = [];

		listCard[titleCardSelected].push(cardDetails);

		return listCard;
	}

	const isCardCreated: boolean = cardsStore.map((item: object) => {
		const listNameKeys = Object.keys(item).includes(titleCardSelected);
		return listNameKeys;
	});

	console.log('----- isCardCreated --->', isCardCreated);

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
