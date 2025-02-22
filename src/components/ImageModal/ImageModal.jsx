import ReactModal from "react-modal";
import css from "./imagemodal.module.css";

const ImageModal = ({
  imageData: {
    url,
    likes,
    description,
    user: { name, location, social },
  },
  openModal,
  stylesObj,
  isOpen,
}) => {
  ReactModal.setAppElement("#root");

  return (
    <ReactModal isOpen={openModal} style={stylesObj} onRequestClose={isOpen}>
      <div>
        <div className={css.wrapImg}>
          <img src={url} alt={description} />
        </div>
        <div className={css.boxAboutImg}>
          <div className={css.boxInfo}>
            <h2 className={css.primaryTitleImg}>{description}</h2>
            <p>
              <span className={css.titleUser}>Likes</span>: {likes}
            </p>
          </div>
          <div className={css.boxInfoUser}>
            <p>
              <span className={css.titleUser}>Name</span>: {name}
            </p>
            <p>
              <span className={css.titleUser}>Location</span>: {location}
            </p>
            <p>
              <span className={css.titleUser}>Instagram</span>: {social}
            </p>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
