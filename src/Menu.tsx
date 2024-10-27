import { AlignJustify, Search, X } from "lucide-react";
import { FC, useState } from "react";

type NavLink = {
  label: string;
  href: string;
};
type MenuProps = {
  items: NavLink[];
};
const Menu: FC<MenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between my-5">
      <ul>
        {isOpen ? (
          <>
            {items.map((item) => {
              return (
                <li>
                  <a href="">{item.label}</a>
                </li>
              );
            })}
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </>
        ) : (
          <button onClick={() => setIsOpen(true)}>
            <AlignJustify />
          </button>
        )}
      </ul>
      <button>
        <Search />
      </button>
    </div>
  );
};

export default Menu;
