import { useCallback, useState } from 'react';

export default function CurrentUserModel() {
  const [currentUser, setCurrentUser] = useState<FastAPIAuthAPI.CurrentUser>();

  const setCurrentUserCallback = useCallback((currentUser: FastAPIAuthAPI.CurrentUser) => {
    setCurrentUser(currentUser);
  }, []);

  return {
    currentUser,
    setCurrentUser: setCurrentUserCallback,
  };
}
