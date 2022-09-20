import {
    useState,
    useEffect
} from 'react'

export default function useMediaQuery() {

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    const [initialRender, setInitialRender] = useState(false);

    function getWindowSize() {
        let screenWidth;
        if (typeof window !== "undefined") {
            screenWidth = window.innerWidth;
        } else {
            screenWidth = 1201;
        }
        return {
            width: screenWidth,
            height: 0
        };
    }

    useEffect(() => {
        let initialSize;
        if (initialRender === false) {
            initialSize = getWindowSize();
            setWindowSize(initialSize);
            setInitialRender(true);

            const handleWindowResize = () => {
                let newSize = getWindowSize();
                setWindowSize(newSize);
            }
            window.addEventListener("resize", handleWindowResize);
            return () => window.removeEventListener("resize", handleWindowResize);
        }

    }, []);
    console.log(windowSize)
    return windowSize
}