import css from "./imageCard.module.css";

const ImageCard = ({ cardInfo: { urls, alt_description } }) => {
  return (
    <div className={css.galleryCard}>
      <img src={urls.small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
