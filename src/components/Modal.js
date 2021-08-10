import React from 'react'; 
import Modal from 'react-modal';
import RippleButton from './RippleButton'
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function App( ) {
    // let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <div>
        <RippleButton className="callToAction" onClick={openModal}>Thought for the Day</RippleButton>
        <Modal 
          closeTimeoutMS={500}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Para refletir"
        >
          <h2>Para refletir</h2>
          <button className="close" title="Fechar reflexão" onClick={closeModal}>Fechar reflexão</button>
          
          <section>
            <figure >
                    <img src="https://i.redd.it/1gxyc19z70s51.jpg" alt="“Quando escrevi este código, só Deus e eu entendemos o que eu fiz. Agora só Deus sabe. ”"/>
                    <figcaption>“Quando escrevi este código, só Deus e eu entendemos o que eu fiz. Agora só Deus sabe. ”</figcaption>
                </figure> 
          </section>
          
        </Modal>
      </div>
    );
  }
