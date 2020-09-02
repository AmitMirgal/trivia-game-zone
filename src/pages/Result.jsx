import React, { useMemo } from "react";
import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";
import filter from "lodash/filter";
import Card from "../layouts/card/Card";
import CardContent from "../layouts/card/CardContent";
import CardController from "../layouts/card/CardController";
import PrimaryButton from "../components/PrimaryButton";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ResultPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  margin: 16px;
`;

const ResultTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: #2d3748;
`;

const ResultDescription = styled.div`
  display: grid;
  grid-template-columns: 10% auto;
  align-items: center;
  padding: 4px 0;
  margin: 4px 0;
`;

const Result = () => {
  const location = useLocation();
  const history = useHistory();

  const score = useMemo(() => {
    const count = filter(location.state.result, ["answer", true]);
    return count.length;
  }, [location]);

  const navigateTo = () => {
    history.push("/");
  };

  return (
    <ResultPanel>
      <ResultTitle>{`You scored ${score}/10`}</ResultTitle>

      <Card>
        <CardContent>
          {location.state.result &&
            location.state.result.map((content, index) => (
              <ResultDescription key={`result-screen-content-${index}`}>
                {content.answer ? (
                  <AiOutlinePlus style={{ margin: "4px" }} />
                ) : (
                  <AiOutlineMinus style={{ margin: "4px" }} />
                )}
                <div
                  style={{ color: content.answer ? "green" : "red" }}
                  dangerouslySetInnerHTML={{ __html: content.question }}
                />
              </ResultDescription>
            ))}
        </CardContent>
        <CardController>
          <PrimaryButton label={"Play Again"} primary onClick={navigateTo} />
        </CardController>
      </Card>
    </ResultPanel>
  );
};

export default Result;
