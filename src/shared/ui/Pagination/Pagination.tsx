import styles from "./styles.module.css";

interface Props {
  currentPage: number;
  totalPages: number;
  handlePageClick: (page: number) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  handlePageClick,
  handlePrevPage,
  handleNextPage,
}: Props) => {
  const getPagination = () => {
    const pages = [];
    const maxVisiblePages = 7; // Количество видимых страниц

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage > 5) pages.push(1, "..."); // Первые страницы и многоточие

      const start = Math.max(1, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...", totalPages); // Последние страницы и многоточие
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {getPagination().map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              onClick={() => handlePageClick(page)}
              className={`${styles.pageNumber} ${page === currentPage ? styles.active : ""}`}
              disabled={page === currentPage}
            >
              {page}
            </button>
          ) : (
            <span key={index} className={styles.ellipsis}>
              {page}
            </span>
          )
        )}
      </div>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;