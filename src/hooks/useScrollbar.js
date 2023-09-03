import { OverlayScrollbars } from 'overlayscrollbars';
import { useEffect } from 'react';
import 'overlayscrollbars/overlayscrollbars.css';

const config = {
  scrollbars: {
    visibility: 'hidden',
  },
};

const useScrollbar = (root) => {
  useEffect(() => {
    let scrollbars;
    if (root.current) {
      scrollbars = OverlayScrollbars(root.current, config);
    }

    return () => {
      if (scrollbars) {
        scrollbars.destroy();
      }
    };
  }, [root]);
};

export { useScrollbar };
