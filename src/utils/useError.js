import { useState, useEffect } from "react";

export const useError = () => {

    const [error, setError] = useState('');

    return {
        myError: error,
        saveError: setError
    }
}
