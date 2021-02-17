import { SocialNetworksContainer, SocialNetworkItem } from './styles';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { COLORS } from '../../constants/colors';

const SocialNetworks = () => {
  const items = [
    {
      icon: <FaLinkedin size="25" color={COLORS.white} />,
      link: 'https://www.linkedin.com/in/douglas-s-3ab933121',
    },
    {
      icon: <FaGithub size="25" color={COLORS.white} />,
      link: 'https://github.com/DouglasSilv',
    },
  ];

  const handleClick = (link) => window.open(link, '_blank');

  return (
    <SocialNetworksContainer>
      {items.map((item, index) => (
        <SocialNetworkItem key={`social-network-${index}`} onClick={() => handleClick(item.link)}>
          {item.icon}
        </SocialNetworkItem>
      ))}
    </SocialNetworksContainer>
  );
};

export default SocialNetworks;
