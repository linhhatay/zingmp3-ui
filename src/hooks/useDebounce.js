import { useState, useEffect } from 'react';

function useDebounced(value, delay) {
    const [debouncedValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debouncedValue;
}

export default useDebounced;
