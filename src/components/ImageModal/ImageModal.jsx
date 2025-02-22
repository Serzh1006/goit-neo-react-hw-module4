import ReactModal from "react-modal";
import css from "./imagemodal.module.css";

const ImageModal = ({ imageData, openModal, stylesObj, isOpen }) => {
  ReactModal.setAppElement("#root");

  return (
    <ReactModal isOpen={openModal} style={stylesObj} onRequestClose={isOpen}>
      <div>
        <div className={css.wrapImg}>
          <img src={imageData.url} alt={imageData?.description} />
        </div>
        <div className={css.boxAboutImg}>
          <div className={css.boxInfo}>
            <h2 className={css.primaryTitleImg}>{imageData?.description}</h2>
            <p>
              <span className={css.titleUser}>Likes</span>: {imageData?.likes}
            </p>
          </div>
          <div className={css.boxInfoUser}>
            <p>
              <span className={css.titleUser}>Name</span>:
              {imageData?.user?.name}
            </p>
            <p>
              <span className={css.titleUser}>Location</span>:
              {imageData?.user?.location}
            </p>
            <p>
              <span className={css.titleUser}>Instagram</span>:
              {imageData?.user?.social}
            </p>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
