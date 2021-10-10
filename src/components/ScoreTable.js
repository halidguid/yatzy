import React, { useState, useEffect } from "react";
import RuleRow from "./RuleRow";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from "./Rules";

import "./ScoreTable.scss";

function ScoreTable({ scores, doScore, rolling }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function getTotalScore() {
    let totalScore = 0;
    for (let key in scores) {
      if (scores[key]) totalScore += scores[key];
    }

    return totalScore;
  }

  useEffect(() => {
    if (localStorage.getItem("highscore") === null) return;

    setHighScore(localStorage.getItem("highscore"));
  }, []);

  useEffect(() => {
    setScore(getTotalScore());
  }, [scores]);

  useEffect(() => {
    localStorage.setItem("score", score);

    if (score > highScore) {
      setHighScore(score);
    }
  }, [score]);

  useEffect(() => {
    localStorage.setItem("highscore", highScore);
  }, [highScore]);

  return (
    <div className="ScoreTable">
      <section className="section">
        <h2>Upper</h2>
        <table cellSpacing="0">
          <tbody>
            <RuleRow
            rolling={rolling}
              name="Ones"
              score={scores.ones}
              description={ones.description}
              doScore={(evt) => doScore("ones", ones.evalRoll)}
            />
            <RuleRow
            rolling={rolling}
              name="Twos"
              score={scores.twos}
              description={twos.description}
              doScore={(evt) => doScore("twos", twos.evalRoll)}
            />
            <RuleRow
            rolling={rolling}
              name="Threes"
              score={scores.threes}
              description={threes.description}
              doScore={(evt) => doScore("threes", threes.evalRoll)}
            />
            <RuleRow
            rolling={rolling}
              name="Fours"
              score={scores.fours}
              description={fours.description}
              doScore={(evt) => doScore("fours", fours.evalRoll)}
            />
            <RuleRow
            rolling={rolling}
              name="Fives"
              score={scores.fives}
              description={fives.description}
              doScore={(evt) => doScore("fives", fives.evalRoll)}
            />
            <RuleRow
            rolling={rolling}
              name="Sixes"
              score={scores.sixes}
              description={sixes.description}
              doScore={(evt) => doScore("sixes", sixes.evalRoll)}
            />
          </tbody>
        </table>
      </section>
      <section className="section section-lower">
        <h2>Lower</h2>
        <table cellSpacing="0">
          <tbody>
            <RuleRow
            rolling={rolling}
              name="Three of Kind"
              score={scores.threeOfKind}
              description={threeOfKind.description}
              doScore={(evt) => doScore("threeOfKind", threeOfKind.evalRoll)}
            />
            <RuleRow
            rolling={rolling}
              name="Four of Kind"
              score={scores.fourOfKind}
              description={fourOfKind.description}
              doScore={(evt) => doScore("fourOfKind", fourOfKind.evalRoll)}
            />
            <RuleRow
            rolling={rolling}
              name="Full House"
              score={scores.fullHouse}
              description={fullHouse.description}
              doScore={(evt) => doScore("fullHouse", fullHouse.evalRoll)}
            />
            <RuleRow
            rolling={rolling}
              name="Small Straight"
              score={scores.smallStraight}
              description={smallStraight.description}
              doScore={(evt) =>
                doScore("smallStraight", smallStraight.evalRoll)
              }
            />
            <RuleRow
            rolling={rolling}
              name="Large Straight"
              score={scores.largeStraight}
              description={largeStraight.description}
              doScore={(evt) =>
                doScore("largeStraight", largeStraight.evalRoll)
              }
            />
            <RuleRow
            rolling={rolling}
              name="Yahtzee"
              score={scores.yahtzee}
              description={yahtzee.description}
              doScore={(evt) => doScore("yahtzee", yahtzee.evalRoll)}
            />
            <RuleRow
            rolling={rolling}
              name="Chance"
              score={scores.chance}
              description={chance.description}
              doScore={(evt) => doScore("chance", chance.evalRoll)}
            />
          </tbody>
        </table>
      </section>
      <h2>Total Score: {score}</h2>
      <h2>High Score: {highScore}</h2>
    </div>
  );
}

export default ScoreTable;
