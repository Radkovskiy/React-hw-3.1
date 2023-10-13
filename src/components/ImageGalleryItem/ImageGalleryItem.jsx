import { Component } from "react";
import Loader from "components/ImageGallery/Loader/Loader";
import fetchAPI from "API-service/fetchAxios";
import renderImg from "components/utils/renderImg";


export default class ImageGalleryItem extends Component {
  state = {
    imgArr: null,
    error: null,
    page: 1,
    status: 'idle',
  }



  componentDidUpdate(prevProps) {
    const prevSearchValue = prevProps.searchValue;
    const nextSearchValue = this.props.searchValue;

    if (prevSearchValue !== nextSearchValue) {
      this.setState({ status: 'pending' })
      fetchAPI(nextSearchValue, 1)  /* если предыдущее значение страницы совпадает с
      текущим, то увеличить текущее на 1
      "prevstate.page === this.state.page && setState({page: +1})" как-то так?
      но при подобной логике, будет меняться значение стейт и ререндериться вся
      страничка(старые будут просто перерисовываться на новые) */
        .then(imgArr => this.setState({ imgArr: imgArr.data, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { imgArr, status, error } = this.state;
    const { toggleModal } = this.props

    if (status === 'pending') {
      return <div>Загрузка...</div>
      // return <Loader />
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>
    }
    if (status === 'resolved') {
      return (
        renderImg(imgArr, toggleModal)
      )
    }
  }

}
