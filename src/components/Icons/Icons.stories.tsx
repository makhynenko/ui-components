import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Icons } from './Icons';
import { Input } from '../Input';
import styles from './icons.module.scss';

storiesOf('Icons', module).add('Default', () => {
  const [newColor, setColor] = useState<string>('#000');
  const [newSize, setSize] = useState<number>(24);

  const onColorChange = (e) => {
    if (e.target.value.trim().length === 0) {
      setColor('black');
    } else {
      setColor(e.target.value);
    }
  };

  const onSizeChange = (e) => {
    if (e.target.value.trim().length === 0) {
      setSize(24);
    } else {
      setSize(e.target.value);
    }
  };

  return (
    <>
      <Input placeholder={'Please insert color'} onChange={onColorChange} width='250px' />
      <Input
        placeholder={'Please insert size (number only)'}
        onChange={onSizeChange}
        width='250px'
      />
      <ul className={styles.iconsList}>
        <li className={styles.iconsItem}>
          <Icons name='burger' color={newColor} size={newSize} />
          <p className={styles.iconName}>burger</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='alertCircle' color={newColor} size={newSize} />
          <p className={styles.iconName}>alertCircle</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='bookmark' color={newColor} size={newSize} />
          <p className={styles.iconName}>bookmark</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='camera' color={newColor} size={newSize} />
          <p className={styles.iconName}>camera</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='info' color={newColor} size={newSize} />
          <p className={styles.iconName}>info</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='archive' color={newColor} size={newSize} />
          <p className={styles.iconName}>archive</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='arrowDownCircle' color={newColor} size={newSize} />
          <p className={styles.iconName}>arrowDownCircle</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='arrowDown' color={newColor} size={newSize} />
          <p className={styles.iconName}>arrowDown</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='arrowLeftCircle' color={newColor} size={newSize} />
          <p className={styles.iconName}>arrowLeftCircle</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='arrowLeft' color={newColor} size={newSize} />
          <p className={styles.iconName}>arrowLeft</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='arrowRightCircle' color={newColor} size={newSize} />
          <p className={styles.iconName}>arrowRightCircle</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='arrowRight' color={newColor} size={newSize} />
          <p className={styles.iconName}>arrowRight</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='arrowUpCircle' color={newColor} size={newSize} />
          <p className={styles.iconName}>arrowUpCircle</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='arrowUp' color={newColor} size={newSize} />
          <p className={styles.iconName}>arrowUp</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='check' color={newColor} size={newSize} />
          <p className={styles.iconName}>check</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='chevronDown' color={newColor} size={newSize} />
          <p className={styles.iconName}>chevronDown</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='chevronLeft' color={newColor} size={newSize} />
          <p className={styles.iconName}>chevronLeft</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='chevronRight' color={newColor} size={newSize} />
          <p className={styles.iconName}>chevronRight</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='chevronUp' color={newColor} size={newSize} />
          <p className={styles.iconName}>chevronUp</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='clock' color={newColor} size={newSize} />
          <p className={styles.iconName}>clock</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='card' color={newColor} size={newSize} />
          <p className={styles.iconName}>card</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='copy' color={newColor} size={newSize} />
          <p className={styles.iconName}>copy</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='delete' color={newColor} size={newSize} />
          <p className={styles.iconName}>delete</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='download' color={newColor} size={newSize} />
          <p className={styles.iconName}>download</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='edit' color={newColor} size={newSize} />
          <p className={styles.iconName}>edit</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='externalLink' color={newColor} size={newSize} />
          <p className={styles.iconName}>externalLink</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='hide' color={newColor} size={newSize} />
          <p className={styles.iconName}>hide</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='show' color={newColor} size={newSize} />
          <p className={styles.iconName}>show</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='facebook' color={newColor} size={newSize} />
          <p className={styles.iconName}>facebook</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='file' color={newColor} size={newSize} />
          <p className={styles.iconName}>file</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='filter' color={newColor} size={newSize} />
          <p className={styles.iconName}>filter</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='flag' color={newColor} size={newSize} />
          <p className={styles.iconName}>flag</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='gift' color={newColor} size={newSize} />
          <p className={styles.iconName}>gift</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='heart' color={newColor} size={newSize} />
          <p className={styles.iconName}>heart</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='helpCircle' color={newColor} size={newSize} />
          <p className={styles.iconName}>helpCircle</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='instagram' color={newColor} size={newSize} />
          <p className={styles.iconName}>instagram</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='image' color={newColor} size={newSize} />
          <p className={styles.iconName}>image</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='link' color={newColor} size={newSize} />
          <p className={styles.iconName}>link</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='linkedin' color={newColor} size={newSize} />
          <p className={styles.iconName}>linkedin</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='lock' color={newColor} size={newSize} />
          <p className={styles.iconName}>lock</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='logIn' color={newColor} size={newSize} />
          <p className={styles.iconName}>logIn</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='logOut' color={newColor} size={newSize} />
          <p className={styles.iconName}>logOut</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='mail' color={newColor} size={newSize} />
          <p className={styles.iconName}>mail</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='mapPin' color={newColor} size={newSize} />
          <p className={styles.iconName}>mapPin</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='increasePic' color={newColor} size={newSize} />
          <p className={styles.iconName}>increasePic</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='decreasePic' color={newColor} size={newSize} />
          <p className={styles.iconName}>decreasePic</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='minusCircle' color={newColor} size={newSize} />
          <p className={styles.iconName}>minusCircle</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='minus' color={newColor} size={newSize} />
          <p className={styles.iconName}>minus</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='moreHorizontal' color={newColor} size={newSize} />
          <p className={styles.iconName}>moreHorizontal</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='moreVertical' color={newColor} size={newSize} />
          <p className={styles.iconName}>moreVertical</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='paperclip' color={newColor} size={newSize} />
          <p className={styles.iconName}>paperclip</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='phone' color={newColor} size={newSize} />
          <p className={styles.iconName}>phone</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='plusCircle' color={newColor} size={newSize} />
          <p className={styles.iconName}>plusCircle</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='plus' color={newColor} size={newSize} />
          <p className={styles.iconName}>plus</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='search' color={newColor} size={newSize} />
          <p className={styles.iconName}>search</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='settings' color={newColor} size={newSize} />
          <p className={styles.iconName}>settings</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='cart' color={newColor} size={newSize} />
          <p className={styles.iconName}>cart</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='tag' color={newColor} size={newSize} />
          <p className={styles.iconName}>tag</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='trash' color={newColor} size={newSize} />
          <p className={styles.iconName}>trash</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='truck' color={newColor} size={newSize} />
          <p className={styles.iconName}>truck</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='user' color={newColor} size={newSize} />
          <p className={styles.iconName}>user</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='crossCircle' color={newColor} size={newSize} />
          <p className={styles.iconName}>crossCircle</p>
        </li>
        <li className={styles.iconsItem}>
          <Icons name='cross' color={newColor} size={newSize} />
          <p className={styles.iconName}>cross</p>
        </li>
      </ul>
    </>
  );
});
