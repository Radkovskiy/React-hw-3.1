import { Component } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components'

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`

const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`

const modalRoot = document.querySelector('#modal-root')

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose()
    }
  }
  handleVackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose()
    }
  }

  render() {
    return createPortal(
      <BackDrop onClick={this.handleVackDropClick}>
        <ModalWindow><img src={this.props.largeImageURL} alt="" /></ModalWindow>
      </BackDrop>,
      modalRoot
    )
  }
}
