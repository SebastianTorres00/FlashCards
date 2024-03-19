import { useRef, useState } from 'react';
import { Text, Dimensions, Image, Animated, PanResponder } from 'react-native';

const Card = () => {
	const SCREEN_HEIGHT = Dimensions.get('window').height;
	const SCREEN_WIDTH = Dimensions.get('window').width;
	// let position;
	const data = [
		{
			id: '1',
			uri: 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
		},
		{
			id: '2',
			uri: 'https://images.unsplash.com/photo-1681871197336-0250ed2fe23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
		},
		{
			id: '3',
			uri: 'https://images.unsplash.com/photo-1681238091934-10fbb34b497a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1282&q=80',
		},
	];

	const position = useRef(new Animated.ValueXY()).current;
	const rotate = position.x.interpolate({
		inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
		outputRange: ['-10deg', '0deg', '10deg'],
		extrapolate: 'clamp',
	});
	const rotateAndTranslate = {
		transform: [
			{
				rotate,
			},
			...position.getTranslateTransform(),
		],
	};
	const [state, setCurrentIndex] = useState({
		currentIndex: 0,
	});
	const likeOpacity = position.x.interpolate({
		inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
		outputRange: [0, 0, 1],
		extrapolate: 'clamp',
	});

	const nopeOpacity = position.x.interpolate({
		inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
		outputRange: [1, 0, 0],
		extrapolate: 'clamp',
	});

	const nextCardOpacity = position.x.interpolate({
		inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
		outputRange: [1, 0, 1],
		extrapolate: 'clamp',
	});

	const nextCardScale = position.x.interpolate({
		inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
		outputRange: [1, 0.8, 1],
		extrapolate: 'clamp',
	});

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event([
				null,
				{ dx: position.x, dy: position.y },
			]),
			onPanResponderRelease: (evt, gestureState) => {
				if (gestureState.dx > 120) {
					Animated.spring(position, {
						toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
					}).start(() => {
						setCurrentIndex({ currentIndex: state.currentIndex + 1 }, () => {
							position.setValue({ x: 0, y: 0 });
						});
					});
				} else if (gestureState.dx < -120) {
					Animated.spring(position, {
						toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
					}).start(() => {
						setCurrentIndex({ currentIndex: state.currentIndex + 1 }, () => {
							position.setValue({ x: 0, y: 0 });
						});
					});
				} else {
					Animated.spring(position, {
						toValue: { x: 0, y: 0 },
						friction: 4,
					}).start();
				}
			},
		}),
	).current;

	return data
		.map((item, index) => {
			if (index < state.currentIndex) {
				return null;
			} else if (index === state.currentIndex) {
				return (
					<Animated.View
						{...panResponder.panHandlers}
						key={index}
						style={[
							rotateAndTranslate,
							{
								height: SCREEN_HEIGHT - 120,
								width: SCREEN_WIDTH,
								padding: 10,
								position: 'absolute',
							},
						]}
					>
						<Animated.View
							style={{
								opacity: likeOpacity,
								transform: [{ rotate: '-30deg' }],
								position: 'absolute',
								top: 50,
								left: 40,
								zIndex: 1000,
							}}
						>
							<Text
								style={{
									borderWidth: 1,
									borderColor: 'green',
									color: 'green',
									fontSize: 32,
									fontWeight: '800',
									padding: 10,
								}}
							>
								LIKE
							</Text>
						</Animated.View>
						<Animated.View
							style={{
								opacity: nopeOpacity,
								transform: [{ rotate: '30deg' }],
								position: 'absolute',
								top: 50,
								right: 40,
								zIndex: 1000,
							}}
						>
							<Text
								style={{
									borderWidth: 1,
									borderColor: 'red',
									color: 'red',
									fontSize: 32,
									fontWeight: '800',
									padding: 10,
								}}
							>
								NOPE
							</Text>
						</Animated.View>
						<Image
							style={{
								flex: 1,
								height: null,
								width: null,
								resizeMode: 'cover',
								borderRadius: 20,
							}}
							src={item.uri}
						/>
					</Animated.View>
				);
			} else {
				return (
					<Animated.View
						key={index}
						style={[
							{
								opacity: nextCardOpacity,
								transform: [{ scale: nextCardScale }],
								height: SCREEN_HEIGHT - 120,
								width: SCREEN_WIDTH,
								padding: 10,
								position: 'absolute',
							},
						]}
					>
						<Image
							style={{
								flex: 1,
								height: null,
								width: null,
								resizeMode: 'cover',
								borderRadius: 20,
							}}
							src={item.uri}
						/>
					</Animated.View>
				);
			}
		})
		.reverse();
};

export default Card;
