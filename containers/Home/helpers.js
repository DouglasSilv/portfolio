const getWelcomeTextBasedOnUserTime = () => {
  const now = new Date();
  const currentHours = now.getHours();

  if (currentHours < 12) {
    return 'Good morning!';
  } else if (currentHours < 18) {
    return 'Good afternoon!';
  } else {
    return 'Good evening!';
  }
};

export { getWelcomeTextBasedOnUserTime };
