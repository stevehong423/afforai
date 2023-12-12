import { useState } from "react";
import "./FAQSection.css";

type FAQType = {
  id: number;
  question: string;
  answer: string;
  toggle: boolean;
};

const FAQSection = () => {
  const [questions, setQuestions] = useState<FAQType[]>([
    {
      id: 1,
      question: "Is Afforai free?",
      answer:
        "Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits",
      toggle: false,
    },
    {
      id: 2,
      question: "What are subscription credits versus permanent credits?",
      answer:
        "Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.",
      toggle: false,
    },
    {
      id: 3,
      question:
        "Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?",
      answer:
        "Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.",
      toggle: false,
    },
    {
      id: 4,
      question: "Does Afforai support uploading images and video?",
      answer:
        "Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript.",
      toggle: false,
    },
    {
      id: 5,
      question: "Does Afforai support collaboration between accounts?",
      answer:
        "Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out.",
      toggle: false,
    },
    {
      id: 6,
      question: "Is my data secured?",
      answer:
        "Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures.",
      toggle: false,
    },
  ]);

  const handleClick = (index: number) => {
    const questionsCopy = questions.slice();
    questionsCopy[index].toggle = !questionsCopy[index].toggle;
    setQuestions(questionsCopy);
  };

  return (
    <div className="question-container">
      <div className="faqs-header">
        <h1>FAQS</h1>
        <p>
          For more information, check out our{" "}
          <a href="https://help.afforai.com/en/">Help Center.</a>
        </p>
      </div>
      {questions.map((question: FAQType, index: number) => (
        <div
          className="question"
          onClick={() => handleClick(index)}
          key={question.id}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <p>{question.question}</p>
            {question.toggle && (
              <p style={{ lineHeight: "150%" }}>{question.answer}</p>
            )}
          </div>
          {question.toggle ? <p>&#8743;</p> : <p>&#8744;</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
