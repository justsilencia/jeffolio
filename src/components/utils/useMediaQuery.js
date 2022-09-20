import {
    useState,
    useEffect
} from 'react'

export default function useMediaQuery() {

    function getWidth() {
        let screenWidth;
        if (typeof window !== "undefined") {
            screenWidth = window.innerWidth;
        } else {
            screenWidth = 1201;
        }
        return screenWidth;
    }

    let initialWidth = getWidth();

    const [width, setWidth] = useState(initialWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            let newWidth = getWidth();
            setWidth(newWidth);
        }
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return {
        width
    };
}