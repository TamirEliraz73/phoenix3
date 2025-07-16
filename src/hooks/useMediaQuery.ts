'use client';
import {useEffect, useState} from "react";

export function useMediaQuery(query:string):boolean {
    const [matches, setMatches] = useState<boolean>(true);
    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);

        listener(); // קריאה ראשונה
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
}