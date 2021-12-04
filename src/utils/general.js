export const convertHashMapToArray = hashMap => [...hashMap.entries()];

export const isObjectEmpty = object => Object.keys(object).length === 0;
