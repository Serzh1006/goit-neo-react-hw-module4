import { useState } from "react";
import { useEffect } from "react";
import ReactModal from "react-modal";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import { getImages } from "../api/api";

ReactModal.setAppElement("#root");
const customStyles = {
  content: {
    padding: 0,
    border: "none",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const App = () => {
  const [value, setValue] = useState("");
  // const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const searchByValue = (text) => {
    setValue(text);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (value === "") {
      return;
    }
    const searchAPI = async () => {
      try {
        setIsLoading(true);
        setError(false);
        setGallery([]);
        const response = await getImages(value);
        setGallery(response);
      } catch (error) {
        setError(true);
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    searchAPI();
  }, [value]);

  return (
    <>
      <SearchBar onSearch={searchByValue} />
      <ImageGallery
        list={gallery}
        modalData={setDataModal}
        isOpenModal={toggleModal}
        style={customStyles}
      />
      <ReactModal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={toggleModal}
      >
        <ImageModal imageData={dataModal} isOpen={toggleModal} />
      </ReactModal>
      {isLoading && <span>Loading...</span>}
    </>
  );
};

export default App;
