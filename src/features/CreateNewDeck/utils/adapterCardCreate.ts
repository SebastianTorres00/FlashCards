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
	console.log('LOG ----> cardsStore', cardsStore);
	console.log('LOG ----> value', value);

	let adapterList = cardsStore[0];
	let isCardCreated: boolean = false;
	cardsStore.forEach((item: object) => {
		isCardCreated = Object.keys(item).includes(titleCardSelected);
	});
	console.log('-----isCardCreated------>', isCardCreated);

	if (!cardsStore.length) {
		return createDeck(titleCardSelected, cardDetails);
	}
	if (cardsStore.length && !isCardCreated) {
		// ya hay mas de un mazo y no existe esa card
		const newDeckCreated = createDeck(titleCardSelected, cardDetails); // Solo retonra el arr con una sola posicion
		/*	
			debe entregar un objeto con dos objetos
			let test = {
				ingles:[
					{},
					{}
				]
			} 
		*/
		const testv12 = { ...newDeckCreated };
		return {
			...testv12,
			...adapterList,
		};
	}

	if (isCardCreated) {
		// En el caso de que ya exista el Mazo , entra aca
		let cardSelected = {};

		cardsStore.forEach((data: string) => {
			console.log('LOG ---> data For each', data);
			console.log('LOG ---> data.length', data.length);
			cardsNumers = data.length;
			if (Object.keys(data).includes(titleCardSelected)) {
				const dataAdapter = {
					[titleCardSelected]: [...data[titleCardSelected]],
				};
				dataAdapter[titleCardSelected].push(cardDetails);
				cardSelected = dataAdapter;
			}
		});
		/*
			let test = {ingles:[{},{}]}
		*/
		console.log('LOG :: -----> cardSelected', cardSelected);

		console.log('LOG :: -----> adapterList', adapterList);

		const keys = [];
		for (let key in adapterList) {
			keys.push(key);
		}
		let cardsNumers = keys.length;

		if (cardsNumers >= 1) {
			// const cardRes = cardsStore.map((data: string) => {
			// 	console.log('LOG :: ---> data', data);

			// 	if (data) {
			// 		console.log('------> item data cardStore LOG cardsNum', data);
			// 		console.log(
			// 			'Object.keys(data).includes(titleCardSelected)',
			// 			Object.keys(data).includes(titleCardSelected),
			// 		);
			// 		return data;
			// 	}
			// });

			const listCards = [];
			for (const property in adapterList) {
				// console.log(`${property}: ${adapterList[property]}`);
				// console.log('----> property', property);
				// console.log('----> adapterList[property]', adapterList[property]);
				if (property !== titleCardSelected) {
					listCards.push({ [property]: adapterList[property] });
				}
			}
			console.log('LOG :: -----> listCards', listCards);

			adapterList = { ...cardSelected };
			console.log('-------> cardRes', adapterList);
			console.log(
				'-------> adapterList[titleCardSelected]',
				adapterList[titleCardSelected],
			);
			const cardAdapt = listCards[0];
			console.log('{ ...cardSelected, ...cardAdapt }', {
				...cardSelected,
				...cardAdapt,
			});

			return {
				...cardSelected,
				...cardAdapt,
			};
		}
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
