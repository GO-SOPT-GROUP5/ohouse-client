import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isDeleteShowing, setIsDeleteShowing] = useState(false);

  const toggle = () => setIsShowing(prev => !prev);
  const deleteToggle = () => setIsDeleteShowing(prev => !prev);

  return {
    isShowing,
    isDeleteShowing,
    toggle,
    deleteToggle,
  };
};

export default useModal;
