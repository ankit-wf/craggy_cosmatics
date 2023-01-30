import React, { useState, useRef, useEffect } from "react";

function usePaginations() {
    let pagenumber = useRef()
    const [currentPage, setCurrentPage] = useState(1);
    let currentPosts = useRef([])

    const handlePageChange = (navigate, pageNumber) => {

        pagenumber.current = pageNumber
        setCurrentPage(pageNumber);
        navigate
        // navigation.navigate(navigate + pageNumber)
    };
    const pagination = (list, postsPerPage) => {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        currentPosts.current = list.slice(indexOfFirstPost, indexOfLastPost);
    }

    const resetPagination = () => {
        setCurrentPage(1);
    }
    return {
        pagination,
        currentPage,
        pageNumber: pagenumber.current,
        handlePageChange: handlePageChange,
        currentPosts: currentPosts,
        resetPagination: resetPagination
    }

}
export default usePaginations;