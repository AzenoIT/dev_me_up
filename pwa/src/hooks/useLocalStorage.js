import {useEffect, useState} from 'react';

function getLocalValue(key, initialValue) {
    const localValue = JSON.parse(localStorage.getItem(key));

    if (localValue) return localValue;
    return initialValue;
}

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => getLocalValue(key, initialValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, setValue, key]);

    return [value, setValue];
}
