const NavItem = props => {
  return (
    <li>
      <div>{props.children}</div>
      <div>
        <h3>{props.label}</h3>
      </div>
    </li>
  );
};

export default NavItem;
