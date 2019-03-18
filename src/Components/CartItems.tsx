import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { List } from 'office-ui-fabric-react/lib/List';
import * as React from 'react';
import { IItem } from '../actions';

export interface IListProps {
  items: IItem[];
}

export interface IListState {
  filterText?: string;
  items?: IItem[];
}

export class CartItems extends React.Component<
  IListProps,
  IListState
> {
  constructor(props: IListProps) {
    super(props);

    this.state = {
      filterText: '',
      items: props.items
    };
  }

  public render(): JSX.Element { 
    return (
        <List items={this.props.items} onRenderCell={this._onRenderCell} />
    );
  }

  private _onRenderCell(
    item: IItem,
    index: number | undefined
  ): JSX.Element {
    return (
      <div className="ms-ListBasicExample-itemCell" data-is-focusable={true}>
        <Image
          className="ms-ListBasicExample-itemImage"
          src={item.imgUrl}
          width={50}
          height={50}
          imageFit={ImageFit.cover}
        />
        <div className="ms-ListBasicExample-itemContent">
          <div className="ms-ListBasicExample-itemName">{item.product}</div>
          <div className="ms-ListBasicExample-itemIndex">{`Item ${index}`}</div>
          <div className="ms-ListBasicExample-itemDesc">{item.id}</div>
        </div>
      </div>
    );
  }
}