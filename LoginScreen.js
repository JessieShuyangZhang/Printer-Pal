import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	TextInput, 
	View, 
	TouchableOpacity, 
	StatusBar, 
	Image, 
	KeyboardAvoidingView,
	AsyncStorage,
	Button
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


class LoginScreen extends Component{

	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
		}
	}

	/*componentDidMount(){
		this._loadInitialState().done();
	}

	_loadInitialState = async () => {
		var value = await AsyncStorage.getItem('user');
		if(value !== null){
			this.props.navigation.navigate('Profile');
		}
	}*/

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>

				<View style={styles.logoContainer}>
					<Image 
						style={styles.logo}
						source={require('../images/printer.jpg')}
					/>
					<Text style={styles.title}>An app made for USC students to locate available printers.</Text>
				</View>

				<View style={styles.textContainer}>
					<StatusBar
						barStyle="light-content"
					/>
					<TextInput
						placeholder = "Username"
						placeholderTextColor = 'white'
						returnKeyType = "next"
						onChangeText={(username) => this.setState({username})}
						returnKeyType="email-address"
						autoCapitalize="none"
						autoCorrect={false}
						style={styles.input}
					/> 
					<TextInput
						placeholder = "Password"
						placeholderTextColor = 'white'
						returnKeyType = "go"
						onChangeText={(password) => this.setState({password})}
						secureTextEntry
						style={styles.input}						
					/>
					<TouchableOpacity 
						style={styles.buttonContainer} 
						onPress={() => this.props.navigation.navigate('Home')}>
						<Text style={styles.buttonText}>LOGIN</Text>
					</TouchableOpacity>
					
				</View>

			</KeyboardAvoidingView>
		);
	}

/*	login = () => {
		fetch( "https://login20190406.firebaseio.com/users.json", {
			method: 'POST',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
			})
		})
		.then((response) => response.json())
		.then((res) => {
			if(res.success === true){
				AsyncStorage.setItem('user', res.user);
				this.props.navigation.navigate('Home');
			}
			else{
				alert(res.message);
			}
		})
		.done();
	}*/
}
export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#00cec9'	
	},
	logo: {
		width: 100,
		height: 100	
	},
	logoContainer: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center'	
	},
	title: {
		color: 'white',
		marginTop: 10,
		width: 160,
		textAlign: 'center',
		opacity: 0.9
	},
	formContainer: {
		flex: 1,
		backgroundColor: '#00cec9'	
	},
	textContainer: {
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: '#81ecec',
		marginBottom: 20,
		color: '#FFFFFF',
		paddingHorizontal: 10
	},
	buttonContainer: {		
		backgroundColor: '#01a3a4',		
		paddingVertical: 15
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '700'
	}
});