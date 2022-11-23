import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
        orci, varius in ligula tempus, viverra auctor ex. Nullam venenatis
        imperdiet turpis sit amet volutpat. Suspendisse non ullamcorper dolor,
        nec convallis arcu. Sed augue quam, accumsan et felis sed, condimentum
        sagittis eros. Nunc egestas dui velit, ac blandit erat pulvinar auctor.
        Vivamus feugiat facilisis leo nec ultricies. Donec commodo nec diam quis
        posuere. Mauris venenatis venenatis eros, nec aliquam sem feugiat ac.
        Fusce consequat hendrerit risus eu sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
        orci, varius in ligula tempus, viverra auctor ex. Nullam venenatis
        imperdiet turpis sit amet volutpat. Suspendisse non ullamcorper dolor,
        nec convallis arcu. Sed augue quam, accumsan et felis sed, condimentum
        sagittis eros. Nunc egestas dui velit, ac blandit erat pulvinar auctor.
        Vivamus feugiat facilisis leo nec ultricies. Donec commodo nec diam quis
        posuere. Mauris venenatis venenatis eros, nec aliquam sem feugiat ac.
        Fusce consequat hendrerit risus eu sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
        orci, varius in ligula tempus, viverra auctor ex. Nullam venenatis
        imperdiet turpis sit amet volutpat. Suspendisse non ullamcorper dolor,
        nec convallis arcu. Sed augue quam, accumsan et felis sed, condimentum
        sagittis eros. Nunc egestas dui velit, ac blandit erat pulvinar auctor.
        Vivamus feugiat facilisis leo nec ultricies. Donec commodo nec diam quis
        posuere. Mauris venenatis venenatis eros, nec aliquam sem feugiat ac.
        Fusce consequat hendrerit risus eu sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
        orci, varius in ligula tempus, viverra auctor ex. Nullam venenatis
        imperdiet turpis sit amet volutpat. Suspendisse non ullamcorper dolor,
        nec convallis arcu. Sed augue quam, accumsan et felis sed, condimentum
        sagittis eros. Nunc egestas dui velit, ac blandit erat pulvinar auctor.
        Vivamus feugiat facilisis leo nec ultricies. Donec commodo nec diam quis
        posuere. Mauris venenatis venenatis eros, nec aliquam sem feugiat ac.
        Fusce consequat hendrerit risus eu sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
        orci, varius in ligula tempus, viverra auctor ex. Nullam venenatis
        imperdiet turpis sit amet volutpat. Suspendisse non ullamcorper dolor,
        nec convallis arcu. Sed augue quam, accumsan et felis sed, condimentum
        sagittis eros. Nunc egestas dui velit, ac blandit erat pulvinar auctor.
        Vivamus feugiat facilisis leo nec ultricies. Donec commodo nec diam quis
        posuere. Mauris venenatis venenatis eros, nec aliquam sem feugiat ac.
        Fusce consequat hendrerit risus eu sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
        orci, varius in ligula tempus, viverra auctor ex. Nullam venenatis
        imperdiet turpis sit amet volutpat. Suspendisse non ullamcorper dolor,
        nec convallis arcu. Sed augue quam, accumsan et felis sed, condimentum
        sagittis eros. Nunc egestas dui velit, ac blandit erat pulvinar auctor.
        Vivamus feugiat facilisis leo nec ultricies. Donec commodo nec diam quis
        posuere. Mauris venenatis venenatis eros, nec aliquam sem feugiat ac.
        Fusce consequat hendrerit risus eu sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
        orci, varius in ligula tempus, viverra auctor ex. Nullam venenatis
        imperdiet turpis sit amet volutpat. Suspendisse non ullamcorper dolor,
        nec convallis arcu. Sed augue quam, accumsan et felis sed, condimentum
        sagittis eros. Nunc egestas dui velit, ac blandit erat pulvinar auctor.
        Vivamus feugiat facilisis leo nec ultricies. Donec commodo nec diam quis
        posuere. Mauris venenatis venenatis eros, nec aliquam sem feugiat ac.
        Fusce consequat hendrerit risus eu sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
        orci, varius in ligula tempus, viverra auctor ex. Nullam venenatis
        imperdiet turpis sit amet volutpat. Suspendisse non ullamcorper dolor,
        nec convallis arcu. Sed augue quam, accumsan et felis sed, condimentum
        sagittis eros. Nunc egestas dui velit, ac blandit erat pulvinar auctor.
        Vivamus feugiat facilisis leo nec ultricies. Donec commodo nec diam quis
        posuere. Mauris venenatis venenatis eros, nec aliquam sem feugiat ac.
        Fusce consequat hendrerit risus eu sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
        orci, varius in ligula tempus, viverra auctor ex. Nullam venenatis
        imperdiet turpis sit amet volutpat. Suspendisse non ullamcorper dolor,
        nec convallis arcu. Sed augue quam, accumsan et felis sed, condimentum
        sagittis eros. Nunc egestas dui velit, ac blandit erat pulvinar auctor.
        Vivamus feugiat facilisis leo nec ultricies. Donec commodo nec diam quis
        posuere. Mauris venenatis venenatis eros, nec aliquam sem feugiat ac.
        Fusce consequat hendrerit risus eu sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
        orci, varius in ligula tempus, viverra auctor ex. Nullam venenatis
        imperdiet turpis sit amet volutpat. Suspendisse non ullamcorper dolor,
        nec convallis arcu. Sed augue quam, accumsan et felis sed, condimentum
        sagittis eros. Nunc egestas dui velit, ac blandit erat pulvinar auctor.
        Vivamus feugiat facilisis leo nec ultricies. Donec commodo nec diam quis
        posuere. Mauris venenatis venenatis eros, nec aliquam sem feugiat ac.
        Fusce consequat hendrerit risus eu sodales.
      </p>
    </div>
  );
}

export default ModalPage;
