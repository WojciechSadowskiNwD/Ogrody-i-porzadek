import { useEffect, useState } from "react";

export default function useDesktopNav(breakpoint: number = 768){
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= breakpoint);

    useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth < 768);
		};

        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener('resize', handleResize)
	}, [breakpoint]);

    return isDesktop;
}