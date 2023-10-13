const API_URL = "https://pixabay.com/api" // почму не ломается из-за отсутствия слеша "/" ?
const API_KEY = '37124750-bb2205b7594ee961e8dd1b6b7'
let page = 1;

const searchParams = new URLSearchParams({
  'image_type': "photo",
  'orientation': 'horizontal',
  'safesearch': true,
  'page': page,
  // 'per_page': 12
});

fetch(`${API_URL}?key=${API_KEY}&q=${nextSearchValue}&${searchParams}`)
  .then(res => {
    if (res.ok) {
      return res.json()
    }

    return Promise.reject(
      new Error(`Нет картинок связанных с названием ${nextSearchValue}`)
    )
  })
  .then(imgArr => this.setState({ imgArr, status: 'resolved' }))
  .catch(error => this.setState({ error, status: 'rejected' }));
