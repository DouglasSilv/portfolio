import { HeaderContainer, HeaderItem } from './styles';

const Header = () => {
  const items = [
    {
      name: 'HOME',
    },
    {
      name: 'ABOUT',
    },
    {
      name: 'SKILLS',
    },
    {
      name: 'MY LIFE',
    },
  ];

  return (
    <HeaderContainer>
      {items.map((item, index) => (
        <HeaderItem key={`header-item-${index}`}>{item.name}</HeaderItem>
      ))}
    </HeaderContainer>
  );
};

export default Header;
