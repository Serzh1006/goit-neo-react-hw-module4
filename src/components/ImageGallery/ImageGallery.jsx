import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ list, modalData, isOpenModal }) => {
  return (
    <ul>
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
  );
};

export default ImageGallery;
