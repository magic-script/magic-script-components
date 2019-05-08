// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';
import { TimePeriod } from './time-period.js';

function createTime(hour, minute, second) {
    const time = new ui.Time();
    
    time.setHour(hour);
    time.setMinute(minute);
    time.setSecond(second);

    return time;
}

export const TimeFormat = ['hh:mm:ss p', 'hh:mm p', 'hh:ss p', 'hh:mm:ss', 'hh:mm', 'hh:ss', 'mm:ss'];
export const TimeFormatConverter = {
    'hh:mm:ss p': {
        toTime(stringTime) {
            const { time, period } = stringTime.split(' ');
            let { hour, minute, second } = time.split(':');

            if (period === TimePeriod.pm) {
                hour = hour + 12;
            }
            
            return createTime(hour, minute, second);
        },
        toString(time) {
            return `${time.twelveHourForm()}:${time.minute()}:${time.second()} ${time.period()}`;
        }
    },
    'hh:mm p': {
        toTime(stringTime) {
            const { time, period } = stringTime.split(' ');
            let { hour, minute } = time.split(':');

            if (period === TimePeriod.pm) {
                hour = hour + 12;
            }
            
            return createTime(hour, minute, 0);
        },
        toString(time) {
            return `${time.twelveHourForm()}:${time.minute()} ${time.period()}`;
        }
    },
    'hh:ss p': {
        toTime(stringTime) {
            const { time, period } = stringTime.split(' ');
            let { hour, second } = time.split(':');

            if (period === TimePeriod.pm) {
                hour = hour + 12;
            }
            
            return createTime(hour, 0, second);
        },
        toString(time) {
            return `${time.twelveHourForm()}:${time.second()} ${time.period()}`;
        }
    },
    'hh:mm:ss': {
        toTime(stringTime) {
            const { hour, minute, second } = stringTime.split(':');            
            return createTime(hour, minute, second);
        },
        toString(time) {
            return `${time.hour()}:${time.minute()}:${time.second()}`;
        }
    },
    'hh:mm': {
        toTime(stringTime) {
            const { hour, minute } = stringTime.split(':');            
            return createTime(hour, minute, 0);
        },
        toString(time) {
            return `${time.hour()}:${time.minute()}`;
        }
    },
    'hh:ss': {
        toTime(stringTime) {
            const { hour, second } = stringTime.split(':');            
            return createTime(hour, 0, second);
        },
        toString(time) {
            return `${time.hour()}:${time.second()}`;
        }
    },
    'mm:ss': {
        toTime(stringTime) {
            const { minute, second } = stringTime.split(':');            
            return createTime(0, minute, second);
        },
        toString(time) {
            return `${time.minute()}:${time.second()}`;
        }
    }
}