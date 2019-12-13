import React from 'react';

const useCustomHooks = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    const x = setInterval(() => {
      setIsLoggedIn(!isLoggedIn);
    }, 2000);

    return () => {
      clearInterval(x);
    };
  }, [isLoggedIn]);

  return isLoggedIn;
};

export default useCustomHooks;
