import { useEffect, useRef } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./imageGallery.module.css";

const ImageGallery = ({ list, modalData, isOpenModal }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (list.length <= 12) return;
    if (galleryRef.current && list.length > 0) {
      const heightCard = galleryRef.current.firstChild?.offsetHeight || 0;
      window.scrollBy({
        top: heightCard * 2,
        behavior: "smooth",
      });
    }
  }, [list]);

  return (
    <main>
      <ul ref={galleryRef} className={css.galleryList}>
        {list.map((card) => {
          return (
            <li
              onClick={() => {
                modalData({
                  likes: card.likes,
                  url: card.urls.regular,
                  description: card.alt_description,
                  user: {
                    name: card.user.name,
                    location: card.user.location,
                    social: card.user.social.instagram_username,
                  },
                });
                isOpenModal();
              }}
              key={card.id}
            >
              <ImageCard cardInfo={card} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ImageGallery;
