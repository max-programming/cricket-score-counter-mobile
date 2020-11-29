import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [over, setOver] = useState({
    overNo: 0,
    ballNo: 0,
  });
  const increaseOver = () => {
    setOver({
      overNo: over.ballNo === 5 ? over.overNo + 1 : over.overNo,
      ballNo: over.ballNo === 5 ? 0 : over.ballNo + 1,
    });
  };
  const increaseRuns = (btnTxt) => {
    setRuns(runs + btnTxt);
    increaseOver();
  };
  return (
    <ScoreContext.Provider
      value={{ runs, wickets, over, increaseRuns, increaseOver }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
