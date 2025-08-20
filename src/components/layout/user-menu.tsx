import ShoppingBagSvgIcon from "../icons/ShoppingBagSvgIcon";
import UserSvgIcon from "../icons/UserSvgIcon";

export function UserMenu() {
  return (
    <ul className="flex items-center justify-center">
      <li className="inline-block px-2">
        <a href="/profile" className="text-gray-700 hover:text-gray-900">
          <UserSvgIcon width={28} />
        </a>
      </li>
      {/* <li className="inline-block px-2">
              <a
                href="/favorites"
                className="text-gray-700 hover:text-gray-900"
              >
                <HeartSvgIcon width={28} />
              </a>
            </li> */}
      <li className="inline-block px-2">
        <a href="/cart" className="text-gray-700 hover:text-gray-900">
          <ShoppingBagSvgIcon width={28} />
        </a>
      </li>
    </ul>
  );
}
