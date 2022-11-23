import React from 'react';
import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Press me!
        </Button>
      </div>
      <div>
        <Button warning className="mb-5">
          <GoDatabase />
          See deal!
        </Button>
      </div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}
        >
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Buy now!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
