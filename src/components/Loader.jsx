import { useState, useEffect, useRef } from "react";

const LoaderComp = () => {
    const pathRef = useRef(null);

    useEffect(() => {
        if (pathRef.current === null) return;
        const id = setInterval(() => {
            const d = pathRef.current.getAttribute("d");
            if (
                d ===
                "M35.616 33.84L23.952 0H11.904L0.192 33.84H10.272L17.952 9.408L25.584 33.84H35.616ZM78.0514 33.84V0H68.6434V18.672L62.2594 0H54.3874L47.9554 18.816V0H38.5474V33.84H49.9234L58.4194 11.856L66.7234 33.84H78.0514Z"
            ) {
                pathRef.current.setAttribute(
                    "d",
                    "M35.616 0.159998L23.952 34H11.904L0.192 0.159998H10.272L17.952 24.592L25.584 0.159998H35.616ZM78.0514 0.159998V34H68.6434V15.328L62.2594 34H54.3874L47.9554 15.184V34H38.5474V0.159998H49.9234L58.4194 22.144L66.7234 0.159998H78.0514Z"
                );
            } else {
                pathRef.current.setAttribute(
                    "d",
                    "M35.616 33.84L23.952 0H11.904L0.192 33.84H10.272L17.952 9.408L25.584 33.84H35.616ZM78.0514 33.84V0H68.6434V18.672L62.2594 0H54.3874L47.9554 18.816V0H38.5474V33.84H49.9234L58.4194 11.856L66.7234 33.84H78.0514Z"
                );
            }
        }, 100);

        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <div className="z-20 fixed top-0 left-0 w-[100vw] h-[100vh] backdrop-blur-md bg-white/30 flex flex-col justify-center items-center">
            <svg
                width="150"
                height="60"
                className="mb-4"
                viewBox="0 0 79 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    ref={pathRef}
                    d="M35.616 33.84L23.952 0H11.904L0.192 33.84H10.272L17.952 9.408L25.584 33.84H35.616ZM78.0514 33.84V0H68.6434V18.672L62.2594 0H54.3874L47.9554 18.816V0H38.5474V33.84H49.9234L58.4194 11.856L66.7234 33.84H78.0514Z"
                    fill="black"
                />
            </svg>
            <p className="text-center text-sm">Loading...</p>
        </div>
    );
};

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("load", ()=>{
            setLoading(false)
        })
    }, []);


    return <>{loading && <LoaderComp />}</>;
};

export default Loader;
