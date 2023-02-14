import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
	token: '',
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
});

const calculateTime = (expireTime) => {
	const currentTime = new Date().getTime();
	const adjExpireTime = new Date(expireTime).getTime();
	const remainTime = adjExpireTime - currentTime;
	
	return remainTime;
};

const retrieveStoredToken = () => {
	const storedToken = localStorage.getItem('token');
	const storedExpireDate = localStorage.getItem('expireTime');

	const remainTime = calculateTime(storedExpireDate);

	if(remainTime <= 3600) {
		localStorage.removeItem('token');
		localStorage.removeItem('expireTime');
		return null;
	};

	return {
		token: storedToken,
		duration: remainTime
	};
};

export const AuthContextProvider = (props) => {
	const tokenData = retrieveStoredToken();
	let initialToken;
	if(tokenData) {
		initialToken = tokenData.token;
	};

	const [token, setToken] = useState(initialToken);

	const userIsLoggedIn = !!token;

	const logoutHandler = useCallback(() => {
		setToken(null);
		localStorage.removeItem('token');
		localStorage.removeItem('expireTime');

		if(logoutTimer) {
			clearTimeout(logoutTimer);
		}
	}, []);

	const loginHandler = (token, expireTime) => {
		setToken(token);
		localStorage.setItem('token', token);
		localStorage.setItem('expireTime', expireTime);

		const remainTime = calculateTime(expireTime);	

		logoutTimer =  setTimeout(logoutHandler, remainTime);
	};

	useEffect(() => {
		if(tokenData) {
			logoutTimer =  setTimeout(logoutHandler, tokenData.duration);
		}
	}, [tokenData, logoutHandler])

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler
	};

	return(
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;