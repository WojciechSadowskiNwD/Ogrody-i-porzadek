export const useScrollTo = () => {
    const scrollTo = (id:string) => {
        const el = document.getElementById(id);

        if(el){
            const y = el.getBoundingClientRect().top + window.scrollY - 20;
            window.scrollTo({top: y, behavior: "smooth"});
        }
    }

    return scrollTo;
};
