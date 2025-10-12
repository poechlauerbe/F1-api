function RaceScheduleObj (name, start, end, location, lat, lon) {
  this.name = name || '';
  this.start = start || '';
  this.end = end || '';
  this.location = location || '';
}

const schedule = [];

const getSchedule = () => {
  return schedule;
};

const addSchedule = (name, start, end, location) => {
  // add check if already existing
  schedule.push(
    new RaceScheduleObj(name, start, end, location)
  );
};

module.exports = {
  addSchedule,
  getSchedule
};
