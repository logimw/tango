import { ICharacters } from "types/CharacterType";

export const actionTypes = {
  firstPage: "FIRST_PAGE",
  prevPage: "PREV_PAGE",
  nextPage: "NEXT_PAGE",
  lastPage: "LAST_PAGE",
  setLimit: "SET_LIMIT",
  setGender: "SET_GENDER",
  setCulture: "SET_CULTURE",
};

type FirstPageAction = {
  type: typeof actionTypes.firstPage;
  payload: "";
};
type PrevPageAction = {
  type: typeof actionTypes.prevPage;
  payload: "";
};
export type Action =
  | FirstPageAction
  | PrevPageAction
  | { type: "NEXT_PAGE"; payload: any }
  | { type: "LAST_PAGE"; payload: any }
  | { type: "SET_LIMIT"; payload: any }
  | { type: "SET_GENDER"; payload: any }
  | { type: "SET_CULTURE"; payload: any };

export const charactersReducer = (state: ICharacters, action: Action) => {
  switch (action.type) {
    case actionTypes.firstPage:
      return { ...state, page: 1 };
    case actionTypes.prevPage:
      if (state.page === 1) return { ...state, page: 1 };
      return { ...state, page: state.page - 1 };
    case actionTypes.nextPage:
      if (state.page === Math.ceil(2134 / state.limit))
        return { ...state, page: Math.ceil(2134 / state.limit) };
      return { ...state, page: state.page + 1 };
    case actionTypes.lastPage:
      return { ...state, page: Math.ceil(2134 / state.limit) };
    case actionTypes.setLimit:
      return { ...state, limit: action.payload, page: 1 };
    case actionTypes.setGender:
      return { ...state, gender: action.payload, page: 1 };
    case actionTypes.setCulture:
      return { ...state, culture: action.payload, page: 1 };
    default:
      throw new Error();
  }
};
