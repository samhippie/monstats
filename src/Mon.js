import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import usage from './data/usage.json';

class Mon extends Component {

	renderMonLink(mon, key) {
		return (
			<div key={key} style={{paddingLeft: '4px'}}>
				<Link to={mon}>{mon}</Link>, 
			</div>
		);
	}

	renderMonList(mons) {
		return (
			<div className="in-a-row">
				{mons.map((mon,i) => this.renderMonLink(mon,i))}
			</div>
		)
	}


	renderTeam(team, key) {
		return (
			<li key={key}>
				{this.renderMonList(team)}
			</li>
		);
	}

	renderTeamList(teams) {
		return (
			<ul>
				{teams.map((team, i) => this.renderTeam(team, i))}
			</ul>
		);
	}

	renderEntry(entry, key) {
		return (
			<li key={key}>
				<div className="in-a-row">
					<div className="entry-field entry-mons">
						{this.renderMonLink(entry.mon, 0)}
					</div>
					<div className="entry-field">
						Win Rate: {entry.rate.toFixed(1)}
					</div>
					<div className="entry-field">
						Count: {entry.count}
					</div>
				</div>
			</li>
		);
	}

	renderPartnerList(partners) {
		return (
			<ul>
				{partners.map((partner, i) => this.renderEntry(partner, i))}
			</ul>
		);
	}

	renderSection(section, key) {
		
		return (
			<div key={key}>
				<h2>Rating {section.min} to {section.max}</h2>
				<p>Used {section.count} times, on {section.percentage.toFixed(1)}% of teams, win rate of {section.winrate.toFixed(1)}%</p>
				<h3>Popular Partners</h3>
				{this.renderPartnerList(section.popPartners)}
				<h3>Top Partners</h3>
				{this.renderPartnerList(section.topPartners)}
				<h3>Popular Teams</h3>
				{this.renderTeamList(section.popTeams)}
			</div>
		);

	}

	render() {
		const mon = this.props.match.params.mon;
		const data = usage.mons[mon];
		return (
			<div>
				<h1>{mon}</h1>
				{data.map((section, i) => this.renderSection(section, i))}
			</div>
		);
	}
}

export default Mon;
