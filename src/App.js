import { useCallback, useState, useMemo } from "react";
import React from "react";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo";
import DemoList from "./components/DemoList";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [letshow, setLetshow] = useState(false);
  const showHandler = () => {
    setShow((prev) => !prev);
  };
  // const demoHandler = () => {
  //   setLetshow(true);
  // };

  const demoHandler = useCallback(() => {
    setLetshow(true);
  }, []);
  //озуно анонимный funk анан зависимость алат 2 аргумент алат,
  //максаты: функцияны reactтын памятына сактап коюу,повторно render кылбаш учун
  //только функцияларга иштетебиз

  // const user = {
  //   name: "Alina",
  //   age: 30,
  // };
  const user = useMemo(() => { //обьект кайтарат озуно 1 зависимость алат//редко используется
    return {
      name: "Alina",
      age: 30,
    };
  });
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {show && <p>This is a true</p>}
      <Button onClick={showHandler}>Clcick me</Button>
      <Demo onClick={demoHandler} user={user} />
      <DemoList />
    </div>
  );
}
export default App;
