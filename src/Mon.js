import React, { Component } from 'react';
import mons from './data/mons.json';

class Mon extends Component {

	renderTeam(team, key) {
		return (
			<li key={key}>
				{team.reduce((acc, m) => acc + ', ' + m)}
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
						{entry.mon}
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
		const data = mons[mon];
		console.log(data)
		return (
			<div>
				<h1>{mon}</h1>
				{data.map((section, i) => this.renderSection(section, i))}
			</div>
		);
	}
}

export default Mon;
