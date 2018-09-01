import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import usage from './data/usage.json';
import './overall.css';

class Overall extends Component {
	

	renderMonLink(mon, key) {
		return (
			<div key={key} style={{paddingLeft: '4px'}}>
				<Link to={'mon/' + mon}>{mon}</Link>, 
			</div>
		);
	}

	renderMonList(mons) {
		return (
			<div className="in-a-row">
				{mons.map((mon, i) => this.renderMonLink(mon, i))}
			</div>
		)
	}

	//renders a row in a section, which has some pokemon, the count, and win rate
	renderEntry(entry, key) {
		return (
			<li key={key}>
				<div className="in-a-row">
					<div className="entry-field entry-mons">
						{this.renderMonList(entry.mons)}
					</div>
					<div className="entry-field">
						Win Rate: {entry.rate.toFixed(1)}%
					</div>
					<div className="entry-field">
						Count: {entry.count}
					</div>
				</div>
			</li>
		);
	}

	//renders a section, which is a set of entries for a particular rating range
	renderSection(section, key) {
		return (
			<div key={key}>
				<h2>Rating {section.min} to {section.max}</h2>
				<ul>
					{section.mons.map((entry, i) => this.renderEntry(entry, i))}
				</ul>
			</div>
		);
	}

	render() {
		let data;
		if(this.props.type === "single") {
			data = usage.overall.single;
		} else {
			data = usage.overall.double;
		}
		if(this.props.sort === "top") {
			data = data.top;
		} else {
			data = data.popular;
		}
		return (
			<div>
				{data.map((section, i) => this.renderSection(section, i))}
			</div>
		);
	}
}

export default Overall;
