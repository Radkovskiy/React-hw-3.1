import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import '../index.css';
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Modal from "./Modal/Modal";
import LoadMore from "./LoadMore/LoadMore";


class App extends Component {
  state = {
    searchValue: '',
    showmodal: false,
    largeImageURL: null,
  }

  toggleModal = (largeImageURL) => {
    this.setState(({ showmodal }) => ({ // 🟠 запутался, что поступает сюда в параметр
      showmodal: !showmodal,
      largeImageURL
    }))
  }

  formSubmitHandler = ({ searchValue }) => {
    this.setState({ searchValue })
  }

  render() {
    const { largeImageURL, searchValue, showmodal } = this.state
    return (<>
      {showmodal && <Modal
        largeImageURL={largeImageURL}
        onClose={this.toggleModal} />}
      <Searchbar onSubmit={this.formSubmitHandler} />
      <ImageGallery>
        <ImageGalleryItem
          searchValue={searchValue}
          toggleModal={this.toggleModal}
        />
      </ImageGallery>
      {searchValue && <LoadMore
        searchValue={searchValue}
      />}
    </>
    )
  };
};

export default App

// 🔴 сделать svg search
// 🔴 сделать лоадер
// 🔴 сделать пагинацию
/* 🔴 кнопочка "Загрузить больше" должна появляться при условии, что
       imgArr не пустой, а у меня стоит условие, что searchValue не пустой */
// 🔴 при тоггле в компоненте с модалкой, в значение
//     стейта largeImageURL ничего не поступает, разобраться
