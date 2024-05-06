import { writeFile } from 'fs';
import { promisify } from 'util';
import { exec } from 'child_process';
import { randomInt } from 'crypto';

// Convert writeFile to return a promise
const writeFileAsync = promisify(writeFile);

// Convert exec to return a promise
const execAsync = promisify(exec);

const FILE_PATH = './data.json';

const makeCommit = async (n) => {
  if (n === 0) {
    await execAsync('git push');
    return;
  }

  // Calculate the number of days between May 1, 2021, and May 1, 2023
  const startDate = new Date('2021-01-01');
  const endDate = new Date('2021-05-21');
  const timeDiff = endDate.getTime() - startDate.getTime();
  const dayDiff = timeDiff / (1000 * 3600 * 24);

  // Generate a random number of days to add to the start date
  const daysToAdd = randomInt(0, dayDiff);

  // Create a new date by adding the random number of days to the start date
  const DATE = new Date(startDate.getTime() + daysToAdd * (1000 * 3600 * 24));

  const data = { date: DATE.toISOString() };

  try {
    await writeFileAsync(FILE_PATH, JSON.stringify(data));
    await execAsync(`git add ${FILE_PATH}`);
    await execAsync(`git commit -m "${DATE.toISOString()}" --date="${DATE.toISOString()}"`);
    await makeCommit(--n);
  } catch (error) {
    console.error(error);
  }
};

makeCommit(1000);
