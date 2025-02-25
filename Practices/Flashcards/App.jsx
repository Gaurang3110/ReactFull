import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What are you",
    answer: "Human",
  },
  {
    id: 3458,
    question: "What are you",
    answer: "Human",
  },
  {
    id: 3459,
    question: "What are you",
    answer: "Human",
  },
  {
    id: 3455,
    question: "What are you",
    answer: "Human",
  },
  {
    id: 3454,
    question: "What are you",
    answer: "Human",
  },
  {
    id: 3453,
    question: "What are you",
    answer: "Human",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState();

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id == selectedId ? "selected" : ""}
        >
          <p>
            {question.id == selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
