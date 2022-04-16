import Modal from 'react-modal';
import { Container } from './styles';
import CloseImg from '../../assets/close.svg'

interface TransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal( {isOpen, onRequestClose}: TransactionModal) {
    return (
        <Modal 
          isOpen={ isOpen } 
          onRequestClose={ onRequestClose }
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
          >
          <button type="button" onClick={ onRequestClose }>
            <img src={ CloseImg } alt="Fechar modal" className="react-modal-close"/>
          </button>
          <Container>
          <h2>Cadastrar Informações</h2>

          <input 
            placeholder="Título" 
          />

          <input 
            type="number" 
            placeholder="Valor" 
          />

          <input 
            placeholder="Categoria" 
          />

          <button type="submit">
            Cadastrar 
          </button>

          </Container>
        </Modal>
    )
}