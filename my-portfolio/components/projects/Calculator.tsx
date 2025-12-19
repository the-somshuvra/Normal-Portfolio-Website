"use client";

import { useEffect, useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [reset, setReset] = useState(false);

  const inputNumber = (num: string) => {
    if (reset) {
      setDisplay(num);
      setReset(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (!display.includes(".")) setDisplay(display + ".");
  };

  const chooseOperator = (op: string) => {
    setPrevValue(parseFloat(display));
    setOperator(op);
    setReset(true);
  };

  const calculate = () => {
    if (operator === null || prevValue === null) return;
    const current = parseFloat(display);
    let result = 0;

    switch (operator) {
      case "+": result = prevValue + current; break;
      case "-": result = prevValue - current; break;
      case "*": result = prevValue * current; break;
      case "/": result = current === 0 ? 0 : prevValue / current; break;
    }

    setDisplay(result.toString());
    setOperator(null);
    setPrevValue(null);
    setReset(true);
  };

  const clear = () => {
    setDisplay("0");
    setOperator(null);
    setPrevValue(null);
    setReset(false);
  };

  const backspace = () => {
    setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
  };

  /* ---------- KEYBOARD SUPPORT ---------- */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (/\d/.test(e.key)) inputNumber(e.key);
      if (e.key === ".") inputDecimal();
      if (["+", "-", "*", "/"].includes(e.key)) chooseOperator(e.key);
      if (e.key === "Enter") calculate();
      if (e.key === "Backspace") backspace();
      if (e.key === "Escape") clear();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div className="w-full max-w-sm mx-auto rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6">
      <div className="mb-4 p-4 rounded-xl bg-black/40 text-right text-3xl font-mono">
        {display}
      </div>

      <div className="grid grid-cols-4 gap-3">
        <Btn onClick={clear} className="col-span-2">C</Btn>
        <Btn onClick={() => chooseOperator("/")}>÷</Btn>
        <Btn onClick={() => chooseOperator("*")}>×</Btn>

        {["7","8","9"].map(n => <Btn key={n} onClick={() => inputNumber(n)}>{n}</Btn>)}
        <Btn onClick={() => chooseOperator("-")}>−</Btn>

        {["4","5","6"].map(n => <Btn key={n} onClick={() => inputNumber(n)}>{n}</Btn>)}
        <Btn onClick={() => chooseOperator("+")}>+</Btn>

        {["1","2","3"].map(n => <Btn key={n} onClick={() => inputNumber(n)}>{n}</Btn>)}
        <Btn onClick={calculate} className="row-span-2 bg-emerald-500/80">=</Btn>

        <Btn onClick={() => inputNumber("0")} className="col-span-2">0</Btn>
        <Btn onClick={inputDecimal}>.</Btn>
      </div>
    </div>
  );
}

function Btn({ children, onClick, className = "" }: any) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl bg-white/10 border border-white/10 py-3 text-lg hover:bg-white/20 transition ${className}`}
    >
      {children}
    </button>
  );
}
