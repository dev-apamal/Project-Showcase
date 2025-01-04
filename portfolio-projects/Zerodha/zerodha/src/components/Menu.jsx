import { NavLink } from "react-router";

export default function Menu() {
  const items = [
    {
      id: "marketWatch",
      name: "Market Watch",
      link: "#",
      icon: "bi bi-bookmark",
    },
    {
      id: "dashboard",
      name: "Dashboard",
      link: "#",
      icon: "bi bi-speedometer",
    },
    {
      id: "orders",
      name: "Orders",
      link: "#",
      icon: "bi bi-bag",
    },
    {
      id: "holdings",
      name: "Holdings",
      link: "#",
      icon: "bi bi-briefcase",
    },
    {
      id: "positions",
      name: "Positions",
      link: "#",
      icon: "bi bi-file-earmark-ruled",
    },
    {
      id: "bids",
      name: "Bids",
      link: "#",
      icon: "bi bi-clock",
    },
    {
      id: "funds",
      name: "Funds",
      link: "#",
      icon: "bi bi-cash",
    },
    {
      id: "support",
      name: "Support",
      link: "#",
      icon: "bi bi-info-circle",
    },
    {
      id: "logout",
      name: "Logout",
      link: "#",
      icon: "bi bi-box-arrow-left",
    },
  ];

  const menuItems = items.map(function (item, index) {
    return (
      <div key={item.id}>
        <NavLink
          to={item.link}
          className="flex py-4 px-4 gap-2 items-center hover:text-red-500"
        >
          <i class={item.icon}></i>
          <li className="text-sm">{item.name}</li>
        </NavLink>
        {index < items.length - 1 && <hr />}
      </div>
    );
  });

  return (
    <main>
      <ul>{menuItems}</ul>
    </main>
  );
}
