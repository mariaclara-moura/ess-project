import React, { useState } from "react";
import { ItensStyles } from "./styles";
import {
  Pencil,
  Trash,
  Check,
} from "./assets";

import { ApiItens } from "@/services/itens";


const Modal = () => {

    const [nomeValue, setNomeValue] = useState("");
    const [priceValue, setPriceValue] = useState(0); // Replace 'number' with a valid initial value
    const [categoryValue, setCategoryValue] = useState("Blusas");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [imageValue, setImageValue] = useState("");
    const [colorsValue, setColorsValue] = useState("");
    const [sizesValue, setSizesValue] = useState("");
    const [amountValue, setAmountValue] = useState(0);

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [confirmDelete, setDeletepen] = useState(false);
  
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
  
    const handleConfirmYes = async () => {
      toggleConfirm(); // Fecha o popup de confirmação
      // Prepara os dados para enviar para o backend
      const data = {
          name: nomeValue,
          price: priceValue,
          category: categoryValue,
          description: descriptionValue,
          image: imageValue,
          colors: colorsValue,
          sizes: sizesValue,
          amount: amountValue,
      };
      try {
        // Chama a função createExample de ApiDeliveryPerson para enviar os dados para o backend
        await ApiItens.createExample(data);
        console.log("Informações enviadas com sucesso!");
        alert("Item cadastrado com sucesso!");
        setNomeValue("");
        setPriceValue(0);
        setCategoryValue("");
        setDescriptionValue("");
        setImageValue("");
        setColorsValue("");
        setSizesValue("");
        setAmountValue(0);
      } catch (error) {
        console.error("Erro ao enviar informações para o backend:", error);
      }
    };
  
  return (
    <div
    id="descricao"
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div style={ItensStyles.inputContainer}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2%",
          marginRight: "3%",
          marginTop: "3%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h3 style={ItensStyles.infosStyle}>Nome da peça:</h3>
          <input
            type="text"
            value={nomeValue}
            onChange={(e) => setNomeValue(e.target.value)}
            placeholder="escreva aqui"
            style={{
              ...ItensStyles.inputBox,
              height: "65%",
              marginLeft: "2%",
            }}
          ></input>{" "}
        </div>
        <img
          src={Pencil.src}
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
        />
      </div>
      <div style={ItensStyles.inputItens}>
        <p style={ItensStyles.extra}>Preço:</p>
        <input
        type="text"
        placeholder="escreva um número"
        value={priceValue === 0 ? "" : priceValue.toFixed(2).replace('.', ',')} 
        onChange={(e) => {
          const inputValue = e.target.value.replace(',', '.');
          setPriceValue(parseFloat(inputValue) || 0);
        }}
        style={ItensStyles.inputBox}
      ></input>
      </div>
      <div style={ItensStyles.inputItens}>
        <p style={ItensStyles.extra}>Quantidade:</p>
        <input
          type="number"
          placeholder="escreva um número"
          value={amountValue}
          onChange={(e) => setAmountValue(Number(e.target.value))}
          style={ItensStyles.inputBox}
        ></input>
      </div>
      <div style={ItensStyles.inputItens}>
        <p style={ItensStyles.extra}>Tamanhos:</p>
        <input
          type="text"
          placeholder="escreva aqui"
          value={sizesValue}
          onChange={(e) => setSizesValue(e.target.value)}
          style={ItensStyles.inputBox}
        ></input>
      </div>
      <div style={ItensStyles.inputItens}>
        <p style={ItensStyles.extra}>Foto:</p>
        <input
          type="text"
          placeholder="escreva aqui"
          value={imageValue}
          onChange={(e) => setImageValue(e.target.value)}
          style={ItensStyles.inputBox}
        ></input>
      </div>
      <div style={ItensStyles.inputItens}>
        <p style={ItensStyles.extra}>Cores:</p>
        <input
          type="text"
          placeholder="escreva aqui"
          value={colorsValue}
          onChange={(e) => setColorsValue(e.target.value)}
          style={ItensStyles.inputBox}
        ></input>
        
      </div>
      <div style={ItensStyles.inputItens}>
        <p style={ItensStyles.extra}>Descrição:</p>
        <input
          type="text"
          placeholder="escreva aqui"
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
          style={{
            ...ItensStyles.inputBox,
            width: "70%",
            height: "200%",
          }}
        ></input>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "2%",
          padding: "3%",
        }}
      >
        <img
          src={Check.src}
          style={{ width: "102px", height: "43px", cursor: "pointer" }}
          onClick={handleAddButtonClick}
        />
        <img
          src={Trash.src}
          style={{ width: "102px", height: "43px", cursor: "pointer" }}
          onClick={handleDeleteButtonClick}
        />{" "}
      </div>
    </div>
  </div>      
  );
};


const Modal2 = () => {
  
    const [nomeValue, setNomeValue] = useState("");
    const [priceValue, setPriceValue] = useState(0); // Replace 'number' with a valid initial value
    const [categoryValue, setCategoryValue] = useState("Blusas");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [imageValue, setImageValue] = useState("");
    const [colorsValue, setColorsValue] = useState("");
    const [sizesValue, setSizesValue] = useState("");
    const [amountValue, setAmountValue] = useState(0);
    const [itemCreated, setitemCreated] = useState(false);
  
    const [selectedItem, setSelectedItem] = useState(null);
    const [createdItem, setCreateItem] = useState(null);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [confirmDelete, setDeletepen] = useState(false);
  
  
    const handleAddClick = (itemIndex: any) => {
      setCreateItem((prevCreateItem) =>
        prevCreateItem === itemIndex ? null : itemIndex
      );
      setSelectedItem(null); // Disable selectedItem when add is clicked
    };
  
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
  
    const handleConfirmYes = async () => {
      toggleConfirm(); // Fecha o popup de confirmação
      // Prepara os dados para enviar para o backend
      const data = {
          name: nomeValue,
          price: priceValue,
          category: categoryValue,
          description: descriptionValue,
          image: imageValue,
          colors: colorsValue,
          sizes: sizesValue,
          amount: amountValue,
      };
      try {
        // Chama a função createExample de ApiDeliveryPerson para enviar os dados para o backend
        await ApiItens.createExample(data);
        console.log("Informações enviadas com sucesso!");
        alert("Item cadastrado com sucesso!");
        setitemCreated(true); 
        setNomeValue("");
        setPriceValue(0);
        setCategoryValue("");
        setDescriptionValue("");
        setImageValue("");
        setColorsValue("");
        setSizesValue("");
        setAmountValue(0);
      } catch (error) {
        console.error("Erro ao enviar informações para o backend:", error);
      }
    };
  
    return (
        <>
        <div id="criar" style={{ display: "flex", justifyContent: "center" }}>
        <div style={ItensStyles.inputContainer}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2%",
              marginRight: "3%",
              marginTop: "3%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h3 style={ItensStyles.infosStyle}>Nome da peça:</h3>
              <input
                value={nomeValue}
                onChange={(e) => setNomeValue(e.target.value)}
                type="text"
                placeholder="escreva aqui"
                style={{
                  ...ItensStyles.inputBox,
                  height: "65%",
                  marginLeft: "2%",
                }}
              ></input>{" "}
            </div>
          </div>
          <div style={ItensStyles.inputItens}>
            <p style={ItensStyles.extra}>Preço:</p>
            <input
            type="text"
            placeholder="escreva um número"
            value={priceValue === 0 ? "" : priceValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            onChange={(e) => {
              const inputValue = e.target.value;
              const numericValue = inputValue !== "" ? parseFloat(inputValue.replace(',', '.')) : 0;
              setPriceValue(numericValue);
            }}
            style={ItensStyles.inputBox}
          />

          </div>
          <div style={ItensStyles.inputItens}>
            <p style={ItensStyles.extra}>Quantidade:</p>
            <input
              type="number"
              placeholder="escreva um número"
              value={amountValue}
              onChange={(e) => setAmountValue(Number(e.target.value))}
              style={ItensStyles.inputBox}
            ></input>
          </div>
          <div style={ItensStyles.inputItens}>
            <p style={ItensStyles.extra}>Tamanhos:</p>
            <input
              type="text"
              placeholder="escreva aqui"
              value={sizesValue}
              onChange={(e) => setSizesValue(e.target.value)}
              style={ItensStyles.inputBox}
            ></input>
          </div>            
            <div style={ItensStyles.inputItens}>
            <p style={ItensStyles.extra}>Foto:</p>
            <input
              type="text"
              placeholder="escreva aqui"
              value={imageValue}
              onChange={(e) => setImageValue(e.target.value)}
              style={ItensStyles.inputBox}
            ></input>
          </div>
          <div style={ItensStyles.inputItens}>
            <p style={ItensStyles.extra}>Cores:</p>
            <input
              type="text"
              placeholder="escreva aqui"
              value={colorsValue}
              onChange={(e) => setColorsValue(e.target.value)}
              style={ItensStyles.inputBox}
            ></input>
          </div>
          <div style={ItensStyles.inputItens}>
            <p style={ItensStyles.extra}>Descrição:</p>
            <input
              type="text"
              placeholder="escreva aqui"
              value={descriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}
              style={{
                ...ItensStyles.inputBox,
                width: "70%",
                height: "200%",
              }}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "2%",
              padding: "3%",
            }}
          >
            <img
              src={Check.src}
              style={{ width: "102px", height: "43px", cursor: "pointer" }}
              onClick={handleAddButtonClick}
            />
            <img
              src={Trash.src}
              style={{ width: "102px", height: "43px", cursor: "pointer" }}
              onClick={handleDeleteButtonClick}
            />{" "}
          </div>
        </div>
      </div>
      {confirmOpen && (
          <div style={ItensStyles.confirmPopup}>
            <div style={ItensStyles.confirmPopupInner}>
              <p>Tem certeza que quer adicionar?</p>
              <div>
                <button
                  onClick={handleConfirmYes}
                  style={ItensStyles.confirmButton}
                >
                  Sim
                </button>
                <button
                  onClick={toggleConfirm}
                  style={ItensStyles.confirmButton}
                >
                  Não
                </button>
              </div>
            </div>
          </div>
        )}
        {confirmDelete && (
          <div style={ItensStyles.confirmPopup}>
            <div style={ItensStyles.confirmPopupInner}>
              <p>Tem certeza que quer remover?</p>
              <div>
                <button
                  onClick={handleAddClick}
                  style={ItensStyles.confirmButton}
                >
                  Sim
                </button>
                <button
                  onClick={toggle2Confirm}
                  style={ItensStyles.confirmButton}
                >
                  Não
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
    }

export { Modal, Modal2 };
