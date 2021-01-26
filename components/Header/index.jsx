import { MENUS } from '../../constants/menus';
import { HeaderContainer, HeaderItem } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      {MENUS.map((item, index) => (
        <HeaderItem key={`header-item-${index}`}>{item.name}</HeaderItem>
      ))}
    </HeaderContainer>
  );
};

export default Header;
