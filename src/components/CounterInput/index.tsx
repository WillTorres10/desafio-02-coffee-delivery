import {CounterInputContainer, CounterNumber} from "@/components/CounterInput/styles.ts";
import {Minus, Plus} from "phosphor-react";

interface CounterInputProps {
  number: number;
  addHandler: () => void;
  lessHandler: () => void;
}
export function CounterInput({number, addHandler, lessHandler} : CounterInputProps) {
  return (
    <CounterInputContainer>
      <Minus onClick={lessHandler} size={14} weight={"bold"} />
      <CounterNumber>{number}</CounterNumber>
      <Plus onClick={addHandler} size={14} weight={"bold"} />
    </CounterInputContainer>
  )
}
