import React, { useState } from 'react';
import './List.css';
import ListItem, { IListItem } from './ListItem';
import { move } from './util';

const DEFAULT_ITEMS: IListItem[] = [
  { name: 'foo' },
  { name: 'bar' },
  { name: 'boo' },
  { name: 'far' },
  { name: 'baz' },
  { name: 'faz' },
];

const List: React.FC = () => {
  const [items, setItems] = useState(DEFAULT_ITEMS);
  const [dragIdx, setDragIdx] = useState(-1);

  const handleDragStart = (ev: React.DragEvent, idx: number) => {
    setDragIdx(idx);
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('item', JSON.stringify(idx));
    // this will hide the item in the list
    // while the dragged item still being visible
    //setTimeout(() => (target as HTMLElement).style.visibility = 'hidden');
  };

  const handleDragOver = (ev: React.DragEvent, dropIdx: number) => {
    ev.preventDefault();
    setItems(items => move(items, dragIdx, dropIdx));
    setDragIdx(dropIdx);
  };

  const handleDragEnd = (ev: React.DragEvent) => {
    const {target} = ev;
    (target as HTMLElement).style.visibility = 'visible';
    setDragIdx(-1);
  };

  return (
    <ul
      className='List'
      data-testid='list'
    >
      {items.map((item, i) => 
        <ListItem
          key={item.name}
          item={item}
          style={i === dragIdx ? {opacity: 0.8} : null}
          draggable='true'
          onDragStart={(ev: React.DragEvent) => handleDragStart(ev, i)}
          onDragOver={(ev: React.DragEvent) => handleDragOver(ev, i)}
          onDragEnd={handleDragEnd}
        />)}
    </ul>
  );
}

export default List;
