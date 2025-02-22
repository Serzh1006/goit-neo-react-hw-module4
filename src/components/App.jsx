import { useState } from "react";
import { useEffect } from "react";
import { FadeLoader } from "react-spinners";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import { getImages } from "../api/api";
import css from "./app.module.css";

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
    backgroundColor: "#0e0a0dad",
    color: "white",
  },
};

const App = () => {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const searchByValue = (text) => {
    setValue(text);
    setPage(1);
    setGallery([]);
  };

  const loadMoreContant = () => {
    setPage((prevPage) => prevPage + 1);
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
        const response = await getImages(value, page);
        if (response.length === 0) {
          iziToast.info({
            title: "Not found!",
            message: "Please try again.",
            position: "bottomCenter",
          });
        }
        setGallery((prevState) => [...prevState, ...response.results]);
        setTotalPages(response.total_pages);
      } catch (err) {
        setError(true);
        iziToast.error({
          title: "Error",
          message: `Status: ${err.status}`,
          position: "bottomCenter",
        });
      } finally {
        setIsLoading(false);
      }
    };
    searchAPI();
  }, [value, page]);

  return (
    <>
      <SearchBar onSearch={searchByValue} />
      <ImageGallery
        list={gallery}
        modalData={setDataModal}
        isOpenModal={toggleModal}
        style={customStyles}
      />
      <FadeLoader
        className={css.loader}
        width={4}
        loading={isLoading}
        color="#43047a"
      />
      {page < totalPages && <LoadMoreBtn handleClick={loadMoreContant} />}
      {error && <ErrorMessage />}
      {isOpen && (
        <ImageModal
          imageData={dataModal}
          isOpen={toggleModal}
          openModal={isOpen}
          stylesObj={customStyles}
        />
      )}
    </>
  );
};

export default App;
