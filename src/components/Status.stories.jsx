import Status from "./Status";

export default {
  title: "Components/Status2",
  component: Status,
  argTypes: {
    currentPlayer: { control: { type: "radio" }, options: [1, 2] },
  },
};

export const Player1 = { args: { currentPlayer: 1 } };
export const Player2 = { args: { currentPlayer: 2 } };
