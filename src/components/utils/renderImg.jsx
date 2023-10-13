import styled from 'styled-components'
import { nanoid } from 'nanoid'


const ImgItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    &:hover {
      transform: scale(1.03);
      cursor: zoom-in;
    }
`

const ImgItemImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`

export default function renderImg(arr, toggleModal) {
  return <>
    {arr?.hits.map(el => (
      <ImgItem key={nanoid()} onClick={() => toggleModal(el.largeImageURL)}>
        <ImgItemImage src={el.webformatURL} alt={el.tags} />
      </ImgItem>
    ))}
  </>
}
