import React, { Component } from 'react';
import { Route, NavLink, HashRouter, Redirect } from 'react-router-dom';
import Overall from './Overall';
import Mon from './Mon';
import usage from './data/usage.json';

class Main extends Component {

	renderRedirect() {
		return (
			<Redirect to="/popular"/>
		);
	}

	renderTop() {
		return (
			<Overall
				sort="top"
				type="single"
			/>
		);
	}

	renderPopular() {
		return (
			<Overall
				sort="popular"
				type="single"
			/>
		);
	}

	renderTopPair() {
		return (
			<Overall
				sort="top"
				type="pair"
			/>
		);
	}

	renderPopularPair() {
		return (
			<Overall
				sort="popular"
				type="pair"
			/>
		);
	}

	render() {
		return (
			<HashRouter>
				<div>
					<h1>Mon Stats</h1>
					<ul className="header">
						<li>
							<NavLink
								exact
								to="/popular"
								activeClassName="active-link"
							>
								Popular	Mons
							</NavLink>
							<NavLink
								exact
								to="/top"
								activeClassName="active-link"
							>
								Top Mons
							</NavLink>
							<NavLink
								exact
								to="/popular-pair"
								activeClassName="active-link"
							>
								Popular	Pairs
							</NavLink>
							<NavLink
								exact
								to="/top-pair"
								activeClassName="active-link"
							>
								Top Pairs
							</NavLink>
						</li>
					</ul>
					<div className="content">
						<Route
							exact path="/"
							render={() => this.renderRedirect()}
						/>
						<Route
							exact path="/popular"
							render={() => this.renderPopular()}
						/>
						<Route
							exact path="/top"
							render={() => this.renderTop()}
						/>
						<Route
							exact path="/popular-pair"
							render={() => this.renderPopularPair()}
						/>
						<Route
							exact path="/top-pair"
							render={() => this.renderTopPair()}
						/>
						<Route
							path="/mon/:mon"
							component={Mon}
						/>
					</div>
					Last updated: {usage.lastUpdated}
				</div>
			</HashRouter>
		);
	}
}

export default Main;
