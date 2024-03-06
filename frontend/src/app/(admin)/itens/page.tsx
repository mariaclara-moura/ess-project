'use client'
import React, { useState } from 'react';
import { ItensStyles } from './styles';
import AddButton from './../../../components/button'; // Importe AddButton
import { ApiDeliveryPerson } from '@/services/itens'; // Importe ApiDeliveryPerson
import { BlacLine, Previous, Next, Add, Look, Fix, Pencil, Trash, Check} from './assets';
import Image from 'next/image';


export default function Itens() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    const totalItems = 10; // Adjust this based on the total number of items
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalItems - 3));
  };

  const [nomeValue, setNomeValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [colorsValue, setColorsValue] = useState("");
  const [sizesValue, setSizesValue] = useState("");
  const [amountValue, setAmountValue] = useState("");

  
  const [selectedItem, setSelectedItem] = useState(null);
  const [createdItem, setCreateItem] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmDelete, setDeletepen] = useState(false);

  const handleItemClick = (itemIndex: any) => {
    setSelectedItem((prevSelectedItem) => (prevSelectedItem === itemIndex ? null : itemIndex));
    setCreateItem(null); // Disable createdItem when an item is clicked
  };

  const handleAddClick = (itemIndex: any) => {
    setCreateItem((prevCreateItem) => (prevCreateItem === itemIndex ? null : itemIndex));
    setSelectedItem(null); // Disable selectedItem when add is clicked
  };



  // const toggleEndereco = () => {
  //   setEnderecoOpen(!enderecoOpen);
  // };

  const toggleConfirm = () => {
    setConfirmOpen(!confirmOpen); // Altera o estado confirmOpen para o oposto do valor atual
    setDeletepen(false); // Fecha o popup de confirmação
  };

  const handleAddButtonClick = () => {
    toggleConfirm(); // Chama a função toggleConfirm quando o botão Add é clicado
  };

  const toggle2Confirm = () => {
    setDeletepen(!confirmDelete); // Altera o estado confirmOpen para o oposto do valor atual
    setConfirmOpen(false); // Fecha o popup de confirmação
  };

  const handleDeleteButtonClick = () => {
    toggle2Confirm(); // Chama a função toggleConfirm quando o botão Add é clicado
  };

  // const handleConfirmYes = async () => {
  //   toggleConfirm(); // Fecha o popup de confirmação
  //   // Prepara os dados para enviar para o backend
  //   const data = {
  //     deliveryPersonData: {
  //       name: nomeValue,
  //       cpf: cpfValue,
  //       email: emailValue,
  //       phone: telefoneValue,
  //       status: "active"
  //     },
  //     addressData: {
  //       ...enderecoData
  //     }
  //   };
  //   try {
  //     // Chama a função createExample de ApiDeliveryPerson para enviar os dados para o backend
  //     await ApiDeliveryPerson.createExample(data);
  //     console.log("Informações enviadas com sucesso!");
  //     setDeliveryPersonCreated(true); // Define o estado para exibir a mensagem "Entregador Criado"
  //   } catch (error) {
  //     console.error("Erro ao enviar informações para o backend:", error);
  //   }
  // };

  return (
    <div style={ItensStyles.container}>
      <img src={BlacLine.src} alt="Linha preta" style={{ width: '318px', height: '27px' }} />
       <text style={ItensStyles.title}>Adicionar Itens</text>
       <div>
        <h1 style={ItensStyles.categoytStyle}>Blusas</h1>
        <div style={ItensStyles.categoriesContainer}>
        <div style={ItensStyles.arrowsContainer}>
        <img src={Previous.src} alt="Anterior" style={{ width: '60px', height: '78px', cursor:'pointer' }} onClick={handlePreviousClick}/>
        <img src={Fix.src} alt="" style={{ width: '60px', height: '78px',}} />
        </div> 
         <div style={ItensStyles.itensContainer}>
        {[0, 1, 2, 3].map((itemIndex) => (
          <div key={currentIndex + itemIndex} onClick={() => handleItemClick(itemIndex)}>
          <img
              src={Look.src}
              alt={`Look ${currentIndex + itemIndex}`}
              style={{ width: '170px', height: '200px' }}
            />
            <h2 style={ItensStyles.itensName}>Nome Peça {currentIndex + itemIndex + 1} </h2>
          </div>
        ))}
      </div>
        <div style={ItensStyles.arrowsContainer}>
        <img src={Next.src} alt="Próximo" style={{ width: '60px', height: '78px', cursor:'pointer' }} onClick={handleNextClick}/>
        <img src={Add.src} alt="Adicionar" style={{ width: '60px', height: '78px',cursor:'pointer'}} onClick={() => handleAddClick(1)} />
        </div>
      </div>
      {selectedItem !== null && (
      <div  id="descricao" style={{display:"flex",justifyContent:"center"}}>
        <div style={ItensStyles.inputContainer}>

        <div style={{display:"flex", justifyContent:'space-between', gap:'2%', marginRight:'3%', marginTop:'3%'}}>
          <h3 style={ItensStyles.infosStyle}>Nome da peça</h3>
          <img
              src={Pencil.src}
              style={{ width: '30px', height: '30px', cursor:'pointer' }}
            /></div>
          <p style={ItensStyles.extra}>Preço:</p>
          <p style={ItensStyles.extra}>Quantidade:</p>
          <p style={ItensStyles.extra}>Tamanhos:</p>
          <p style={ItensStyles.extra}>Cores:</p>
          <p style={ItensStyles.extra}>Descrição:</p>
          <div style={{display:"flex", justifyContent:'flex-end', gap:'2%', marginRight:'3%'}}>
          <img
            src={Check.src}
            style={{ width: '102px', height: '43px', cursor:'pointer' }}
            onClick={handleAddButtonClick}
          />
            <img
            src={Trash.src}
            style={{ width: '102px', height: '43px',cursor:'pointer' }}
            onClick={handleDeleteButtonClick}
          /> </div>
        </div></div> )}
        
        {createdItem !== null && (

  <div  id="criar" style={{display:"flex",justifyContent:"center"}}>
      <div style={ItensStyles.inputContainer}>
        <div style={{display:"flex", justifyContent:'space-between', gap:'2%', marginRight:'3%', marginTop:'3%'}}>
        <h3 style={ItensStyles.infosStyle}>Nome da peça:</h3>
        <img
            src={Pencil.src}
            style={{ width: '30px', height: '30px', cursor:'pointer' }}
          /></div>
        <p style={ItensStyles.extra}>Preço:</p>
        <p style={ItensStyles.extra}>Quantidade:</p>
        <p style={ItensStyles.extra}>Tamanhos:</p>
        <p style={ItensStyles.extra}>Cores:</p>
        <p style={ItensStyles.extra}>Descrição:</p>
        <div style={{display:"flex", justifyContent:'flex-end', gap:'2%', marginRight:'3%', marginBottom:'3%'}}>
        <img
            src={Check.src}
            style={{ width: '102px', height: '43px', cursor:'pointer' }}
            onClick={handleAddButtonClick}
          />
            <img
            src={Trash.src}
            style={{ width: '102px', height: '43px',cursor:'pointer' }}
            onClick={handleDeleteButtonClick}
          /> </div>
      </div></div>  )}
      {confirmOpen && (
        <div style={ItensStyles.confirmPopup}>
          <div style={ItensStyles.confirmPopupInner}>
            <p>Tem certeza que quer adicionar?</p>
            <div> 
              <button onClick={handleAddClick} style={ItensStyles.confirmButton}>Sim</button>
              <button onClick={toggleConfirm} style={ItensStyles.confirmButton}>Não</button>
           
            </div>
          </div>
        </div>
      )}
      {confirmDelete && (
       <div style={ItensStyles.confirmPopup}>
          <div style={ItensStyles.confirmPopupInner}>
            <p>Tem certeza que quer remover?</p>
            <div> 
              <button onClick={handleAddClick} style={ItensStyles.confirmButton}>Sim</button>
              <button onClick={toggle2Confirm} style={ItensStyles.confirmButton}>Não</button>
            </div>
          </div>
        </div>     )}
  </div>
    </div>
  );
}
