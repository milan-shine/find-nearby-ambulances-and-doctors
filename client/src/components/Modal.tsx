import React from 'react'
import styled from 'styled-components';

type ModalProps = {
    onClose: () => void;
    title?: string;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({ children, onClose, title }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <ModalHeader>
                    <StyledTitle>{title}</StyledTitle>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                </ModalHeader>
                {children}
            </ModalContent>
        </ModalOverlay>
    )
}

export default Modal;


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #242424;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
`;

const CloseButton = styled.button`
  float: right;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const StyledTitle = styled.h2`
  margin: 0;
`