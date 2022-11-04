export function convertUTCDateToLocalDate(date) {
    const tempDate = new Date(date);
    return new Date(tempDate.getTime() - tempDate.getTimezoneOffset()*60*1000);
}