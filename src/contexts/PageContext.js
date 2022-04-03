import { useState, createContext, useContext } from "react";
import { DataContext } from "./DataContext";

export const PageContext = createContext();

const PageContextProvider = (props) => {
    const {dataContext} = useContext(DataContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const handlePage = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const resetPage = () => {
        setCurrentPage(prevPage => 1);
    }

    const pages = [];
    for (let i = 1; i <= Math.ceil(dataContext.filteredData.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dataContext.filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const pageContext = {
        pages,
        currentPage,
        currentItems,
        resetPage,
        handlePage,
        handlePrevPage,
        handleNextPage,
        minPageNumberLimit,
        maxPageNumberLimit
    };

    return (
        <PageContext.Provider value={{pageContext}}>
            {props.children}
        </PageContext.Provider>
    );
}

export default PageContextProvider;