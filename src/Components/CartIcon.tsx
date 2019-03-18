import { IButtonProps, IconButton } from 'office-ui-fabric-react/lib/Button';
import * as React from 'react';

export class CartIcon extends React.Component<IButtonProps> {
  public render(): JSX.Element {

    return (
      <div>
        <IconButton
          iconProps={{ iconName: 'Emoji2' }}
          title="Shopping Cart"
          ariaLabel="Shppping cart icon"
        />
      </div>
    );
  }
}
