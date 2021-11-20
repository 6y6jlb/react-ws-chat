


export const getTime = (date:Date) => {
    const getTwoDig = (time:number) => {
        const string = time.toString()
        return string.length > 1 ? string : `0${string}`
    }
    const hour = getTwoDig(date.getHours())
    const min = getTwoDig(date.getMinutes())
    const sec = getTwoDig(date.getSeconds())
    return `${ hour }: ${min }: ${ sec }`
}

const timeFromUnix = (date:number) => {
    return new Date(date * 1000)
}

export const getDate = (date:number) => {
    const fullDate = timeFromUnix(date)
    const year = fullDate.getFullYear()
    const month = fullDate.getMonth()
    const day = fullDate.getDay()
    return `${ year }: ${month }: ${ day }`
}
export const timeConverter = (UNIX_timestamp:number) => {
    // weird
    const a = new Date(UNIX_timestamp / 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}