import React, { useState } from 'react';
import './List.css';
import ListItem, { IListItem } from './ListItem';

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

  const handleDragStart = (ev: React.DragEvent, idx: number) => {
    const {dataTransfer, target} = ev;
    dataTransfer.setData('item', JSON.stringify(idx));
    // this will hide the item in the list
    // while the dragged item still being visible
    setTimeout(() => (target as HTMLElement).style.visibility = 'hidden');
  };

  const handleDragOver = (ev: React.DragEvent) => {
    console.log('#######', 'dragover');
    ev.preventDefault();
  };

  const handleDragEnd = (ev: React.DragEvent) => {
    console.log('#######', 'dragend');
    const {target} = ev;
    (target as HTMLElement).style.visibility = 'visible';
  };

  const handleDrop = (ev: React.DragEvent, dropIdx: number) => {
    const dataJson = ev.dataTransfer.getData('item')
    const dragIdx = JSON.parse(dataJson);
    console.log('#######', 'drop', dragIdx, dropIdx);
    setItems(items => {
      return dragIdx < dropIdx
      ? [
        ...items.slice(0, dragIdx),
        ...items.slice(dragIdx + 1, dropIdx + 1),
        ...items.slice(dragIdx, dragIdx + 1),
        ...items.slice(dropIdx + 1),
      ]
      : [
        ...items.slice(0, dropIdx),
        ...items.slice(dragIdx, dragIdx + 1),
        ...items.slice(dropIdx, dragIdx),
        ...items.slice(dragIdx + 1),
      ];
    });
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
          draggable='true'
          onDragStart={(ev: React.DragEvent) => handleDragStart(ev, i)}
          onDragOver={handleDragOver}
          onDrop={(ev: React.DragEvent) => handleDrop(ev, i)}
          onDragEnd={handleDragEnd}
        />)}
    </ul>
  );
}

export default List;
