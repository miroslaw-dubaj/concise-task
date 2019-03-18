export interface ICart {
  items: IItem[]
}

export interface IItem {
  id: number | undefined;
  imgUrl: string | undefined;
  product: string | undefined;
}

export type CartAction =
  | { type: 'INITIALIZE_VIEW'}
  | { type: 'FETCHED_CART', items: ICart  }
  | { type: 'VIEW_LOADED'}


// action creators
export const initiateCart = () => { 
  return {
    type: 'INITIALIZE_VIEW',
  };
};

export const fetchedCart = (items: IItem[]) => { 
  return {
    items,
    type: 'FETCHED_CART'
  };
};

export const cartLoaded = () => { 
  return {
    type: 'VIEW_LOADED'
  };
};

