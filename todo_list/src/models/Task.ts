import { State } from "../types/enums";

export default class Task {
  id: string;
  value: string;
  state: string;

  constructor(value: string) {
    this.id = self.crypto.randomUUID();
    this.value = value;
    this.state = State.Pending;
  };
};