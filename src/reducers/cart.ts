import { CartAction, ICart } from '../actions';

interface ICartState {
  cart: ICart | [],
  isLoading: boolean;
}

const initialState: ICartState = {
  cart: [],
  isLoading: false,
};

export default function cartReducer(state = initialState, action: CartAction) {
  switch (action.type) {
    case 'INITIALIZE_VIEW':
      return { ...state, isLoading: true }
    case 'FETCHED_CART':
      return { ...state, isLoading: true, cart: action.items }
    case 'VIEW_LOADED':
      return { ...state, isLoading: false }
    default:
      return state;
  }
}
