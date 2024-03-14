import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	listCards,
	setTitleCardSelected,
} from '../../../store/listSlice/homeSlice';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-paper-toast';

const useCreateCards = () => {
	const dispatch = useDispatch();
	const listCardsStore = useSelector((state) => state.listCard.cards);
	const storeState = useSelector((state) => state.listCard);
	const navigation = useNavigation();
	const [titleCard, setTitleCard] = useState('');
	const [step, setStep] = useState('1');
	const [listTextInput, setListTextInput] = useState([{ textInputID: '1' }]);
	const [cardDetails, setCardDetails] = useState({
		title: '',
		response: '',
	});
	const [showModal, setShowModal] = useState(false);
	const toaster = useToast();
	const handleCorrect = () =>
		toaster.show({
			message: 'Crard creada correctamente',
			type: 'success',
			position: 'top',
		});

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
		setCardDetails({ ...cardDetails, title: value });
	};

	const onSubmitCard = () => {
		const listCreateCard = {
			cardsStore: listCardsStore,
			cardDetails,
			titleCardSelected: titleCard,
		};
		dispatch(listCards(listCreateCard));
		handleCorrect();
		navigation.navigate('Home');
	};
	const nextCard = () => {
		const listCreateCard = {
			cardsStore: listCardsStore,
			cardDetails,
			titleCardSelected: titleCard,
		};
		dispatch(listCards(listCreateCard));
		setCardDetails({
			title: '',
			response: '',
		});
		handleCorrect();
		setShowModal(!showModal);
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
	// console.log('LOG ----> cardDetails', cardDetails);

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
		nextCard,
		cardDetails,
	};
};

export default useCreateCards;
