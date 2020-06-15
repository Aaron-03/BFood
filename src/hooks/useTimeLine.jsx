import { useEffect, useState } from 'react';



const useTimeLine = (initialState, initialPage) => {
    
    const [ timeline, setTimeline ] = useState(initialState);
    const [ page, setPage ] = useState(initialPage);

    useEffect(() => {

        if(page === 0) {
            nextLevel('0%', '-5%');
        } else if(page === 1) {
            nextLevel('25%', '20%');
        } else if(page === 2) {
            nextLevel('75%', '70%');
        } else {
            nextLevel('100%', '95%');
        }

    }, [page]);

    const nextLevel = (progress, position = '') => {
        setTimeline({
            progress,
            position
        });
    }

    return [ timeline, page, setPage ];
}
 
export default useTimeLine;