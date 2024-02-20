import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCards } from '../../../store/listSlice/homeSlice';

const useCreateCards = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
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
		dispatch(listCards(cardDetails));
	};

	const onShowModal = () => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		console.log('STATE ====>', state);
	}, [state]);

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
