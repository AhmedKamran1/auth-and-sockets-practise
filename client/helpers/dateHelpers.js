import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';

export const getTimePassed = (time) => {
  dayjs.extend(relativeTime);
  return dayjs(time).fromNow();
};

export const getDate = (time) => {
  return dayjs(time).locale('en').format('DD MMMM YYYY');
};

export const getTime = (time) => {
  return dayjs(time).locale('en').format('h:mm A');
};

export const getOtpTimer = (ttl) => {
  dayjs.extend(duration);
  return dayjs.duration(ttl, 'seconds').format('m:ss');
};
