import * as Papa from 'papaparse';

export function csvJson(csvString) {
    const parsed = Papa.parse(csvString, { header: true, dynamicTyping: true });
    return parsed.data;
}
