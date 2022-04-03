// import { useState } from 'react';

// const usePages = (data) => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(5);

//     const [pageNumberLimit, setPageNumberLimit] = useState(5);
//     const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
//     const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

//     const handlePage = (event) => {
//         setCurrentPage(Number(event.target.id));
//     };

//     const resetPage = () => {
//         setCurrentPage(prevPage => 1);
//         console.log(currentPage);
//     }

//     const pages = [];
//     for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
//         pages.push(i);
//     }

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//     const handlePrevPage = () => {
//         setCurrentPage(currentPage - 1);

//         if ((currentPage - 1) % pageNumberLimit === 0) {
//             setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
//             setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
//         }
//     }

//     const handleNextPage = () => {
//         setCurrentPage(currentPage + 1);

//         if (currentPage + 1 > maxPageNumberLimit) {
//             setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
//             setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
//         }
//     }

//     return {
//         pages,
//         currentPage,
//         currentItems,
//         resetPage,
//         handlePage,
//         handlePrevPage,
//         handleNextPage,
//         minPageNumberLimit,
//         maxPageNumberLimit
//     };
// }

// export default usePages;