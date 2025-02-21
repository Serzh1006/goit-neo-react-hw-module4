import css from "./loadmorebtn.module.css";

const LoadMoreBtn = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={css.loadMoreBtn} type="button">
      Load More
    </button>
  );
};

export default LoadMoreBtn;
