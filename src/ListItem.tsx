import React from 'react';
import './ListItem.css';

export interface IListItem {
  name: string;
}

interface ListItemProps extends React.PropsWithoutRef<any> {
  item: IListItem
}

const ListItem: React.FC<ListItemProps> = ({item, ...root}) => {
  return (
    <li
      className="ListItem"
      {...root}
    >
      {item.name}
    </li>
  );
}

export default ListItem;
