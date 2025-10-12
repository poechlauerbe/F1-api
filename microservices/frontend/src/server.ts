import express from 'express';

import { indexRouter } from './routes/index.js';
import { driverRouter } from './routes/drivers.js';
import { gplistRouter } from './routes/gplist.js';
import { laptimesRouter } from './routes/laptimes.js';
import { leaderboardRouter } from './routes/leaderboard.js';
import { pitRouter } from './routes/pit.js';
import { racecontrolRouter } from './routes/racecontrol.js';
import { singleDriverRouter } from './routes/singledriver.js';
import { teamradioRouter } from './routes/teamradio.js';
import { trackinfoRouter } from './routes/trackinfo.js';
import { racedatesRouter } from './routes/racedates.js';
import { impressumRouter } from './routes/impressum.js';

const app = express();
const port = 4000;

app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the favicon
app.use('/favicon.ico', express.static('public/favicon.ico'));

app.use('/', indexRouter);
app.use('/drivers', driverRouter);
app.use('/gplist', gplistRouter);
app.use('/laptimes', laptimesRouter);
app.use('/leaderboard', leaderboardRouter);
app.use('/pit', pitRouter);
app.use('/racecontrol', racecontrolRouter);
app.use('/singledriver', singleDriverRouter);
app.use('/teamradio', teamradioRouter);
app.use('/trackinfo', trackinfoRouter);
app.use('/racedates', racedatesRouter);
app.use('/impressum', impressumRouter);

app.listen(port, () => {
	console.log(`Frontend server is running at http://localhost:${port}`);
});
