import GimmeError from '../models/GimmeError';
import schema from '../schema';
import { handleTypeErrors } from '../utils';

const gimmeTime = (period = false) => {
  const args = [period];
  handleTypeErrors(args, schema.time);

  const noOfHours = period ? 12 : 24;
  const noOfMins = 60;

  let hour = Math.floor(Math.random() * noOfHours);
  let min = Math.floor(Math.random() * noOfMins);

  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;

  return `${hour}:${min}`;
};

export default {
  time: period => gimmeTime(period)
};
