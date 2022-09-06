import React, { useState, useEffect } from "react";
import Die from "../../Components/Tenzies/Die";
import Clock from "../../Components/Tenzies/Clock";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import styles from "./tenzies.module.css";

function Tenzies(props) {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [rolls, setRolls] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [bestTime, setBestTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      container : (props.theme ? styles.containerDark : styles.containerLight),
      tenzContainer : styles.tenzContainer,
      title : styles.title,
      instructions : styles.instructions,
      diceContainer : styles.diceContainer,
      footDiv : styles.footDiv,
      scoreIndicator : styles.scoreIndicator,
      diceRoller : styles.diceRoller,
      bestScore : styles.bestScore,
      bestTime : styles.bestTime,
    });
  }, [props.theme]);

  useEffect(() => {
    if (localStorage.getItem("bestScore")) {
      if (parseInt(localStorage.getItem("bestScore")) !== 0) {
        setBestScore(parseInt(localStorage.getItem("bestScore")));
        let _bestTime = parseInt(localStorage.getItem("bestTime"));
        setBestTime(
          ("0" + Math.floor((_bestTime / 60000) % 60)).slice(-2) +
            ":" +
            ("0" + Math.floor((_bestTime / 1000) % 60)).slice(-2)
        );
      }
    } else {
      localStorage.setItem("bestScore", 0);
      localStorage.setItem("bestTime", 0);
    }
  }, []);

  useEffect(() => {
    if (tenzies && (bestScore === 0 || bestScore > rolls)) {
      localStorage.setItem("bestScore", rolls);
      localStorage.setItem("bestTime", time);
      setBestScore(rolls);
      setBestTime(
        ("0" + Math.floor((time / 60000) % 60)).slice(-2) +
          ":" +
          ("0" + Math.floor((time / 1000) % 60)).slice(-2)
      );
    }
    // eslint-disable-next-line
  }, [tenzies]);

  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  useEffect(() => {
    if (
      dice.every((die) => die.isHeld) &&
      dice.every((die) => die.value === dice[0].value)
    ) {
      setTenzies(true);
      setIsPaused(!isPaused);
      setIsActive(false);
    }
    // eslint-disable-next-line
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function handleClick() {
    if (!tenzies) {
      setRolls(rolls + 1);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      console.log("New Game");
      setRolls(0);
      setIsActive(false);
      setTime(0);
      setDice(allNewDice());
      setTenzies(false);
    }
    if (rolls === 0) {
      setIsActive(true);
      setIsPaused(false);
    }
  }
  function holdDie(id) {
    if (rolls === 0) {
      setIsActive(true);
      setIsPaused(false);
    }
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDie={() => holdDie(die.id)}
      styles={styles}
    />
  ));

  return (
    <div className={style.container}>
      <div className={style.tenzContainer}>
      <main>
        {tenzies && <Confetti />}
        <h1 className={style.title}>Tenzies</h1>
        <p className={style.instructions}>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className={style.diceContainer}>{diceElements}</div>
        <div className={style.footDiv}>
          <p className={style.scoreIndicator}>Rolls: {rolls}</p>
          <button className={style.diceRoller} onClick={handleClick}>
            {tenzies ? "New Game" : "Roll"}
          </button>
          <Clock time={time} isActive={isActive} isPaused={isPaused}  styles={styles}/>
        </div>
        <div className={style.footDiv}>
          <p className={style.bestScore}>Best Score: {bestScore}</p>
          <p className={style.bestTime}>Best Time: {bestTime}</p>
        </div>
      </main>
      </div>
    </div>
  );
}

export default Tenzies;
