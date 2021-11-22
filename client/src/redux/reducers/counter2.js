const initialState = {
  counter2: 200,
};

export default function counter2(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        counter2: state.counter2 + 1,
      };
    case "SUB":
      return {
        counter2: state.counter2 - 1,
      };
    case "ADD_NUMBER":
      return {
        counter2: state.counter2 + action.payload,
      };
    default:
      return state;
  }
}
