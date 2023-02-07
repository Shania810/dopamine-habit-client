import React, { useEffect, useState } from "react";
import Api from "../utils/api.utils";
import { BarChart } from "./BarChart";
import { PositionContainer, SubTitle } from "./commons";

const Analysis = () => {
  const [analyses, setAnalyses] = useState(null);

  const runAnalysis = async () => {
    try {
      const data = await Api.getAnalysis();
      setAnalyses(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    runAnalysis();
  }, []);

  if (analyses) {
    if (analyses[analyses.length - 1].duration >= 7) {
      return <PositionContainer>
        <SubTitle style={{ width: 500 }}>My Analysis </SubTitle>
        {analyses?.map((analysis) => <BarChart charData={analysis.habits} />)}
      </PositionContainer>
    } else {
      return <PositionContainer>
        <SubTitle style={{ width: 500 }}>My Analysis </SubTitle>
        <h1>Come back when you complete 7 days from the day you started your analysis</h1>
      </PositionContainer>
    }

  } else {
    return <PositionContainer>
      <SubTitle style={{ width: 500 }}>My Analysis </SubTitle>
      <h1>Please let us analyze you to see the chart</h1>
    </PositionContainer>
  }
};

export default Analysis;
