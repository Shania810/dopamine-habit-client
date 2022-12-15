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
      {analysis?.habits && <BarChart charData={analysis.habits} />}
    </PositionContainer>
  );
};

export default Analysis;
