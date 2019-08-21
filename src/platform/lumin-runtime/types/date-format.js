// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

function createDate(year, month, day) {
    const date = new ui.Date();
    
    date.setYear(year);
    date.setMonth(month);
    date.setDay(day);

    return date;
}

export const DateFormat = ['MM/DD/YYYY', 'DD/MM/YYYY', 'MM/YYYY', 'DD/YYYY'];
export const DateFormatConverter = {
    'MM/DD/YYYY': {
        toDate(dateString) {
            const { month, day, year } = dateString.split('/');
            return createDate(year, month, day);
        },
        toString(date) {
            if ( !(date instanceof ui.Date)) {
                throw new TypeError(`Input value is not a valid Date object`);
            }

            return `${date.month()}/${date.day()}/${date.year()}`;
        }
    },
    'DD/MM/YYYY': {
        toDate(dateString) {
            const { day, month, year } = dateString.split('/');
            return createDate(year, month, day);
        },
        toString(date) {
            if ( !(date instanceof ui.Date)) {
                throw new TypeError(`Input value is not a valid Date object`);
            }

            return `${date.day()}/${date.month()}/${date.year()}`;
        }
    },
    'MM/YYYY': {
        toDate(dateString) {
            const { month, year } = dateString.split('/');
            return createDate(year, month, 1);
        },
        toString(date) {
            if ( !(date instanceof ui.Date)) {
                throw new TypeError(`Input value is not a valid Date object`);
            }

            return `${date.month()}/${date.year()}`;
        }
    },
    'DD/YYYY': {
        toDate(dateString) {
            const { day, year } = dateString.split('/');
            return createDate(year, 1, day);
        },
        toString(date) {
            if ( !(date instanceof ui.Date)) {
                throw new TypeError(`Input value is not a valid Date object`);
            }

            return `${date.day()}/${date.year()}`;
        }
    }
}