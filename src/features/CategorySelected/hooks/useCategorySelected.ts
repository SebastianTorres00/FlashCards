import { useEffect, useState } from 'react';

const useCategorySelected = ({ CardSelected }: any) => {
	const [adapterCardSelected, setAdapterCardSelected] = useState([]);
	const [titleCardSelected, setTitle] = useState('');

	useEffect(() => {
		if (CardSelected) {
			setTitle(CardSelected?.title);
			setAdapterCardSelected(CardSelected);
		}
	}, [CardSelected]);
	return { adapterCardSelected, titleCardSelected };
};
export default useCategorySelected;
