import React, { useEffect, useState } from "react";
import Api from "../utils/api.utils";
import { BarChart } from "./BarChart";
import { PositionContainer, SubTitle } from "./commons";
//import { Loading } from './Loading';

const Analysis = () => {
  const [analysis, setAnalysis] = useState({});

  const runAnalysis = async () => {
    try {
      const data = await Api.getAnalysis();
      setAnalysis(data[data.length - 1]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    runAnalysis();
  }, []);
  return (
    <PositionContainer>
      <SubTitle style={{width: 500}} >My Analysis </SubTitle>
      {(analysis?.habits && analysis)?<BarChart charData={analysis.habits} />: <h1>Please let us analyze you to see the chart</h1>}
    </PositionContainer>
  );
};

export default Analysis;
