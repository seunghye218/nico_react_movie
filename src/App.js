import React from 'react';
//import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import Detail from './routes/Detail.js';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/movie/:id">
					<Detail />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>);
}
