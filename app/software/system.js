"use client"
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function FormatDateTimeAsString(datetime) {
    return `${MONTHS[datetime.getMonth()-1]}, ${datetime.getFullYear()}`
}

function FormatDurationAsString(start, end) {
    const days = (end - start)/(1000*60*60*24);
    const years = Math.floor(days / 365);
    const months = Math.ceil((days % 365)/30);

    const yearsString = years ? `${years} year${years > 1 ? "s" : ""}` : null;
    const monthsString = months ? `${months} month${months > 1 ? "s" : ""}` : null;

    return `${yearsString ?? ""}${yearsString && monthsString ? ", " : ""}${monthsString ?? ""}`
}

const DataLoadedEvent = (globalThis.window) ? new globalThis.window.CustomEvent("data-loaded", { "detail": "Data that may affect the DOM has been loaded. " }) : ""

export {FormatDateTimeAsString, FormatDurationAsString, DataLoadedEvent}