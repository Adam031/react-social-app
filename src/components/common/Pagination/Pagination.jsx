import React from "react";
import styles from "./Pagination.module.css";

export const Pagination = (props) => {
    let pagesCount = Math.ceil(props.pagination.total / props.pagination.pageSize);

    const pagesCountArray = [];
    const window = 3;
    const start = Math.max(1, props.pagination.currentPage - window);
    const end = Math.min(pagesCount, props.pagination.currentPage + window);

    if (start > 1) {
        pagesCountArray.push(1);
        if (start > 2) pagesCountArray.push("...");
    }

    for (let i = start; i <= end; i++) {
        pagesCountArray.push(i);
    }

    if (end < pagesCount) {
        if (end < pagesCount - 1) pagesCountArray.push("...");
        pagesCountArray.push(pagesCount);
    }

    return (
        <div className={styles.pagination}>
            {pagesCountArray.map(page => {
                return <span key={page} className={props.pagination.currentPage === page ? styles.active : undefined}
                             onClick={() => {props.onPaginationClick(page)}}>{page}</span>
            })}
        </div>
    )
}