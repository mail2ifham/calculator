

export default function reducer(state, action) {
  switch (action.type) {
    case "1":
      return {
        name: "dark-blue",
        value: "1",
      };
    case "2":
      return {
        name: "light-gray",
        value: "2",
      };
    case "3":
      return {
        name: "dark-violet",
        value: "3",
      };

    default:
      state;
      break;
  }
}
