import React from 'react';

import clsx from 'clsx';
import { Button } from '~/components/ui';

export interface HomePageProps {
  className?: string;
}

const HomePage: React.FC<HomePageProps> = ({ className = '' }) => {
  return (
    <div className={clsx('', className)}>
      <p>HomePage</p>
      <div>
        <p>Test :</p>
        <Button>Clique moi</Button>
      </div>
    </div>
  );
};

export default HomePage;
