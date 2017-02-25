import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Button } from './common';
import { Card, CardSection, Input, Spinner } from './gridercommon';

class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false };

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}

	onLoginFail() {
		this.setState({ error: 'Authentication Failed', loading: false });
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		});
		Actions.main();
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log In
			</Button>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Card>
					<CardSection>
						<Input 
							placeholderTextColor='#FFF'
							placeholder="user@gmail.com"
							label="Email"
							value={this.state.email}
							onChangeText={email => this.setState({ email })}
						/>
					</CardSection>
					<CardSection>
						<Input 
							placeholderTextColor='#FFF'
							secureTextEntry
							placeholder="password"
							label="Password"
							value={this.state.password}
							onChangeText={password => this.setState({ password })}
						/>
					</CardSection>
					<Text style={styles.errorTextStyle}>
						{this.state.error}
					</Text>
					<CardSection>
						{this.renderButton()}
					</CardSection>
				</Card>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#4CAF50'
  },
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
