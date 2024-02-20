import { useState } from 'react';

const useCreateCards = () => {
	const [titleCard, setTitleCard] = useState('');
	const [step, setStep] = useState('1');
	const [listTextInput, setListTextInput] = useState([{ textInputID: '1' }]);
	const [cardDetails, setCardDetails] = useState({
		title: { 0: '' },
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
		console.log('LOG :: >>>');
	};

	const onShowModal = () => {
		setShowModal(!showModal);
	};

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
	};
};

export default useCreateCards;
