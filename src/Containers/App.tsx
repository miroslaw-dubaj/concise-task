

import * as React from 'react';

import { CartIcon } from '../Components/CartIcon';
import { CartItems } from '../Components/CartItems';

import { connect } from 'react-redux';
import {
  fetchedCart,
  IItem,
  initiateCart,
} from '../actions';

import { CART_JSON } from '../api';

interface IConnectedProps {
  onAppLoad: () => void;
  fetchedCart: (items: IItem[]) => void;
}

interface IProps extends IConnectedProps {
  cart: IItem[]
}

class App extends React.Component<IProps, {}> {
  public onAppLoad = () => {
    this.props.onAppLoad();
  };

  public fetchedCart = (items: IItem[]) => {
    this.props.fetchedCart(items);
  };

  public componentDidMount() {
    const mockupFetchedData = JSON.stringify(CART_JSON);
    const cartData = JSON.parse(mockupFetchedData);

    this.onAppLoad();
    this.fetchedCart(cartData);
  }

  public render() {
    return (
      <div className="App">
        <CartIcon />
        {this.props.cart ? <CartItems items={this.props.cart} /> : null}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchedCart: (payload: IItem[]) => dispatch(fetchedCart(payload)),
  onAppLoad: () => dispatch(initiateCart()),
});

const mapStateToProps = (state: any) => {
  return { cart: state.cart.cart};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

