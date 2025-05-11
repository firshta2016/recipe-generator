import React, {useState} from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ModalWrapper = styled.div`
  /* your modal styles */
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #f44336;
  }
`;

const ButtonContainer = styled.div`
  margin: 1rem 0;

  button {
    margin-right: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;

    &:last-child {
      background-color: #dc3545;
    }
  }
`;

const RecipeModal = ({ recipe, closeModal }) => {
  const [scale, setScale] = useState(1)

  const increaseScale = () => setScale((prev) => prev + 0.25);
  const decreaseScale = () =>
    setScale((prev) => (prev > 0.25 ? prev - 0.25 : prev));

  const scaleQuantity = (quantity) => {
    const parsed = parseFloat(quantity)

    if (!isNaN(parsed)) {
      return (parsed * scale)
    }
    return quantity;
  }
  
  const handleReadAloud = () => {

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance();
    const instructions = recipe.steps
      .map((step) => step.instruction)
      .join(". ");
    speech.text = `Here are the steps for ${recipe.title}. ${instructions}`;
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  const handleStopReading = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <ModalBackground>
      <ModalWrapper>
        <ModalContent>
          <CloseButton onClick={closeModal}>&times;</CloseButton>

          <div style={{ margin: "1rem 0" }}>
            <strong>Adjust Serving Size:</strong>
            <br />
            <button onClick={decreaseScale}>−</button>
            <span style={{ margin: "0 10px" }}>Scale: {scale}×</span>
            <button onClick={increaseScale}>+</button>
          </div>

          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>
                {scaleQuantity(ingredient.quantity)} {ingredient.unit} of{" "}
                {ingredient.name}
              </li>
            ))}
          </ul>

          <h2>{recipe.title}</h2>
          <p>
            <strong>Description:</strong> {recipe.description}
          </p>

          <ButtonContainer>
            <button onClick={handleReadAloud}>🔊 Read Instructions</button>
            <button onClick={handleStopReading}>⛔ Stop Reading</button>
          </ButtonContainer>

          <h3>Steps</h3>
          <ol>
            {recipe.steps.map((step, idx) => (
              <li key={idx}>{step.instruction}</li>
            ))}
          </ol>
        </ModalContent>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default RecipeModal;
