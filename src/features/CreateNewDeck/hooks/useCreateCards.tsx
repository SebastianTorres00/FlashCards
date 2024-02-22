import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	listCards,
	setTitleCardSelected,
} from '../../../store/listSlice/homeSlice';

const useCreateCards = () => {
	const dispatch = useDispatch();
	const listCardsStore = useSelector((state) => state.listCard.cards);
	const storeState = useSelector((state) => state.listCard);
	const [titleCard, setTitleCard] = useState('');
	const [step, setStep] = useState('1');
	const [listTextInput, setListTextInput] = useState([{ textInputID: '1' }]);
	const [cardDetails, setCardDetails] = useState({
		title: {},
		response: '',
	});
	const [showModal, setShowModal] = useState(false);
	const onChangeSteps = () => {
		if (step === '1') {
			dispatch(setTitleCardSelected(titleCard));
			setStep('2');
			return;
		}
		setStep('1');
	};

	const onChangeTitleCards = (value: string) => {
		setTitleCard(value);
	};

	const createMoreInputs = () => {
		setListTextInput([
			...listTextInput,
			{ textInputID: String(listTextInput.length) },
		]);
	};

	const onChangeResponse = (value: string) => {
		setCardDetails({ ...cardDetails, response: value });
	};
	const onChangeTitle = (value: string) => {
		setCardDetails({ ...cardDetails, title: { 0: value } });
	};

	const onSubmitCard = () => {
		const listCreateCard = {
			cardsStore: listCardsStore,
			cardDetails,
			titleCardSelected: titleCard,
		};
		// titleCardSelected: titleCard
		console.log('LOG :: -listCardsStore-->', listCreateCard);

		dispatch(listCards(listCreateCard));
	};

	const onShowModal = () => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		console.log('Store-->listCreateCard ====>', storeState);
		if (storeState?.cards) {
			storeState?.cards?.map((item) => {
				console.log('TEST item useEEFECt', item);
			});
		}
	}, [storeState]);

	return {
		titleCard,
		onChangeTitleCards,
		step,
		onChangeSteps,
		listTextInput,
		createMoreInputs,
		onChangeResponse,
		onSubmitCard,
		onChangeTitle,
		onShowModal,
		showModal,
	};
};

export default useCreateCards;
