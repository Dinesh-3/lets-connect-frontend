import { useEffect, useState } from "react";

const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
        audio.addEventListener("ended", () => setPlaying(false));
        return () => {
            audio.removeEventListener("ended", () => setPlaying(false));
        };
    }, []);

    return [playing, setPlaying];
};

const useInput = () => {
    const [value, setValue] = useState("");
    const reset = () => {
        setValue("");
    };

    const bind = {
        value,
        onChange: (e) => {
            setValue(e.target.value);
        }
    };
    return [value, bind, reset];
};

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value]);
    return [value, setValue];
};

const useNetwork = () => {
    const [netWorkStatus, setNetworkStatus] = useState(() => {
        return getNetworkStatus();
    });

    useEffect(() => {}, []);

    return [netWorkStatus, setNetworkStatus];
};

const getNetworkStatus = () => {
    return navigator.onLine ? true : false;
};

const getSavedValue = (key, initialValue) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
};

const useUpdateLogger = (value) => {
    useEffect(() => {}, [value]);
};

const useNetworkStatus = () => {
    const [status, setStatus] = useState(navigator.onLine);

    useEffect(() => {
        const setOnline = () => {
            setStatus(true);
        };

        const setOffline = () => {
            setStatus(false);
        };

        window.addEventListener("online", setOnline);
        window.addEventListener("offline", setOffline);

        return () => {
            window.removeEventListener("online", setOnline);
            window.removeEventListener("offline", setOffline);
        };
    }, []);

    return status;
};

export { useInput, useLocalStorage, useUpdateLogger, useNetwork, useNetworkStatus };
