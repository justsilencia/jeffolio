import moment from 'moment';

const timeElapsed = (startDate, verb) => {
    const elapsed = moment.duration(moment().diff(startDate));
    var strElapsed = 'Error calculating duration.';
    if (elapsed._data.seconds === 0) {
        strElapsed = verb + ' just now.'
    } 
    if (elapsed._data.seconds > 0) {
        strElapsed = verb + ' ' + elapsed._data.seconds + ' seconds ago.'
    } 
    if (elapsed._data.minutes > 0) {
        strElapsed = verb + ' ' + elapsed._data.minutes + 
        (elapsed._data.minutes > 1 ? ' minutes ago.' : ' minute ago.')
    } 
    if (elapsed._data.hours > 0) {
        strElapsed = verb + ' ' + elapsed._data.hours + 
        (elapsed._data.hours > 1 ? ' hours ago.' : ' hour ago.')
    } 
    if (elapsed._data.days > 0) {
        strElapsed = verb + ' ' + elapsed._data.days + 
        (elapsed._data.days > 1 ? ' days ago.' : ' day ago.')
    } 
    if (elapsed._data.months > 0) {
        strElapsed = verb + ' ' + elapsed._data.months + 
        (elapsed._data.months > 1 ? ' months ago.' : ' month ago.')
    } 
    if (elapsed._data.years > 0) {
        strElapsed = verb + ' ' + elapsed._data.years + 
        (elapsed._data.years > 1 ? ' years ago' : ' year ago')
    } 
    
    return strElapsed;
}

export default timeElapsed;