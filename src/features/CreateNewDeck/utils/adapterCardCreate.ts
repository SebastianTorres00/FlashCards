import { IDetailsCards } from '../../../store/listSlice/homeSlice';

interface ICardProps {
	cardDetails: IDetailsCards;
	titleCardSelected: string;
	cardsStore: any; // cualquier array
}

const adapterCardCreate = (value: ICardProps) => {
	const { titleCardSelected, cardDetails, cardsStore } = value;
	console.log('-----> value', value);

	const listCard = {};

	if (!cardsStore.length) {
		Object.defineProperty(listCard, titleCardSelected, {
			value: [],
			writable: true,
			enumerable: true,
		});

		console.log('cardDetails --->', cardDetails);

		listCard[titleCardSelected].push(cardDetails);

		console.log('listCard --->', listCard);
		return listCard;
	}
	const isCardCreated: boolean = cardsStore.map((item: object) => {
		const listNameKeys = Object.keys(item).includes(titleCardSelected);
		return listNameKeys;
	});

	if (isCardCreated) {
		console.log('-----cardsStore', cardsStore);

		const listCard = cardsStore.filter((item: object) => {
			if (Object.keys(item).includes(titleCardSelected)) {
				return item;
			}
			return {};
		});
		console.log('listCard----->', listCard);
		let cardSelected;
		cardsStore.forEach((item: object) => {
			if (Object.keys(item).includes(titleCardSelected)) {
				cardSelected = item;
				return;
			}
			return {};
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
        },
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
