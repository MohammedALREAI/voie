import { Item as ItemInterface } from 'lib/data-types';
import Item from './Item';

export default function ItemList({ items }: { items: ItemInterface[] }) {
  return (
    <ul className="container mx-auto my-2 space-y-5">
      {items.map((item) => (
        <li key={item._id.toString()}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
}
