const { getDriverName } = require('./obj_drivers');

function Teamradio(date, driverNumber, driverName, recUrl) {
	this.date = date;
	this.driverNumber = driverNumber;
	this.driverName = driverName;
	this.recUrl = recUrl;
}

let teamradios = [];

const getTeamradiosLength = () => {
	return teamradios.length;
}

const getTeamradios = () => {
	return teamradios.reverse();
}

const addTeamradios = (date, driverNumber, recUrl) => {
	const radio = teamradios.find(radio => radio.recUrl === recUrl);
	if (!radio) {
		teamradios.push(new Teamradio(date, driverNumber, getDriverName(driverNumber), recUrl))
	}
}

module.exports = {
	addTeamradios,
	getTeamradios,
	getTeamradiosLength
}
