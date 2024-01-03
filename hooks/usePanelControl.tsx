import React from 'react';

const usePanelControl = () => {
  const [openPanel, setOpenPanel] = React.useState(false);

  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const button = document.getElementById('multi__select__button');
      const panel = document.getElementById('multi__select__panel');

      if (!button?.contains(e.target as Node) && !panel?.contains(e.target as Node)) {
        setOpenPanel(false);
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, []);

  return {
    openPanel,
    setOpenPanel
  };
};

export default usePanelControl;
