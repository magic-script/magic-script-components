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
        toString(dateObject) {
            if ( !(dateObject instanceof ui.Date)) {
                throw new TypeError(`Input value is not a valid Date object`);
            }

            return `${dateObject.month()}/${dateObject.day()}/${dateObject.year()}`;
        }
    },
    'DD/MM/YYYY': {
        toDate(dateString) {
            const { day, month, year } = dateString.split('/');
            return createDate(year, month, day);
        },
        toString(dateObject) {
            if ( !(dateObject instanceof ui.Date)) {
                throw new TypeError(`Input value is not a valid Date object`);
            }

            return `${dateObject.day()}/${dateObject.month()}/${dateObject.year()}`;
        }
    },
    'MM/YYYY': {
        toDate(dateString) {
            const { month, year } = dateString.split('/');
            return createDate(year, month, 1);
        },
        toString(dateObject) {
            if ( !(dateObject instanceof ui.Date)) {
                throw new TypeError(`Input value is not a valid Date object`);
            }

            return `${dateObject.month()}/${dateObject.year()}`;
        }
    },
    'DD/YYYY': {
        toDate(dateString) {
            const { day, year } = dateString.split('/');
            return createDate(year, 1, day);
        },
        toString(dateObject) {
            if ( !(dateObject instanceof ui.Date)) {
                throw new TypeError(`Input value is not a valid Date object`);
            }

            return `${dateObject.day()}/${dateObject.year()}`;
        }
    }
}