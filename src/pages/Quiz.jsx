import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Card from "../layouts/card/Card";
import isEmpty from "lodash/isEmpty";
import Skeleton from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import CardContent from "../layouts/card/CardContent";
import CardController from "../layouts/card/CardController";
import { fetchQuizQuestion } from "../common/utils/api";

const QuizPanel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  align-items: flex-start;
  padding: 16px;
  margin: 16px;
`;

const QuizTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: #2d3748;
`;

const QuizCard = styled.div`
  background-color: #ff6a00;
  box-shadow: 0 0 0 75px rgba(255, 106, 0, 0.2);
  border-top-right-radius: 1000px;
  margin-top: 50px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

let result = [];

const Quiz = () => {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const history = useHistory();

  const setQuizResult = useCallback(
    (question, correctAnswer, answer) => {
      let _counter = counter + 1;
      if (_counter === 10) {
        const _answer = correctAnswer === answer;
        result.push({ question, answer: _answer });
        history.push({
          pathname: "/result",
          state: { result },
        });
      } else {
        const _answer = correctAnswer === answer;
        result.push({ question, answer: _answer });
        setCounter(_counter);
      }
    },
    [history, counter]
  );

  async function fetchData() {
    const res = await fetchQuizQuestion();
    setData(res);
  }

  useEffect(() => {
    fetchData();

    return () => {
      result = [];
    };
  }, []);

  return (
    <QuizPanel>
      {isEmpty(data) ? (
        <Skeleton width={350} height={50} />
      ) : (
        <QuizTitle>{data.results[counter].category}</QuizTitle>
      )}

      <QuizCard>
        <Card>
          <CardContent>
            {isEmpty(data) ? (
              <Skeleton height={150} width={450} />
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: data.results[counter].question,
                }}
              />
            )}
          </CardContent>
          <CardController alignRow={true}>
            {isEmpty(data) ? (
              <Skeleton height={50} width={225} />
            ) : (
              <PrimaryButton
                label={"True"}
                primary
                onClick={() =>
                  setQuizResult(
                    data.results[counter].question,
                    data.results[counter].correct_answer,
                    "True"
                  )
                }
              />
            )}
            {isEmpty(data) ? (
              <Skeleton height={50} width={225} />
            ) : (
              <PrimaryButton
                label={"False"}
                onClick={() =>
                  setQuizResult(
                    data.results[counter].question,
                    data.results[counter].correct_answer,
                    "False"
                  )
                }
              />
            )}
          </CardController>
        </Card>
      </QuizCard>
    </QuizPanel>
  );
};

export default Quiz;
