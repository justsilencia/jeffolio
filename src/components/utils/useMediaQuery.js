import {
    useState,
    useEffect
} from 'react'

export default function useMediaQuery() {
    if (window) {
        const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleWindowResize);
            return () => window.removeEventListener("resize", handleWindowResize);
        }, []);

        return {
            width
        };
    } else {
        return false;
    }
}