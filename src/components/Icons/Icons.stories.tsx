import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Icons } from './Icons';
import { Input } from '../Input';
import style from './icons.module.scss';

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
      <Input placeholder={'Please insert color'} onChange={onColorChange} />
      <Input placeholder={'Please insert size (number only)'} onChange={onSizeChange} />
      <ul className={style.iconsList}>
        <li className={style.iconsItem}>
          <Icons name='burger' color={newColor} size={newSize} />
          <p className={style.iconName}>burger</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='alertCircle' color={newColor} size={newSize} />
          <p className={style.iconName}>alertCircle</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='bookmark' color={newColor} size={newSize} />
          <p className={style.iconName}>bookmark</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='camera' color={newColor} size={newSize} />
          <p className={style.iconName}>camera</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='info' color={newColor} size={newSize} />
          <p className={style.iconName}>info</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='archive' color={newColor} size={newSize} />
          <p className={style.iconName}>archive</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='arrowDownCircle' color={newColor} size={newSize} />
          <p className={style.iconName}>arrowDownCircle</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='arrowDown' color={newColor} size={newSize} />
          <p className={style.iconName}>arrowDown</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='arrowLeftCircle' color={newColor} size={newSize} />
          <p className={style.iconName}>arrowLeftCircle</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='arrowLeft' color={newColor} size={newSize} />
          <p className={style.iconName}>arrowLeft</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='arrowRightCircle' color={newColor} size={newSize} />
          <p className={style.iconName}>arrowRightCircle</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='arrowRight' color={newColor} size={newSize} />
          <p className={style.iconName}>arrowRight</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='arrowUpCircle' color={newColor} size={newSize} />
          <p className={style.iconName}>arrowUpCircle</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='arrowUp' color={newColor} size={newSize} />
          <p className={style.iconName}>arrowUp</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='check' color={newColor} size={newSize} />
          <p className={style.iconName}>check</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='chevronDown' color={newColor} size={newSize} />
          <p className={style.iconName}>chevronDown</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='chevronLeft' color={newColor} size={newSize} />
          <p className={style.iconName}>chevronLeft</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='chevronRight' color={newColor} size={newSize} />
          <p className={style.iconName}>chevronRight</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='chevronUp' color={newColor} size={newSize} />
          <p className={style.iconName}>chevronUp</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='clock' color={newColor} size={newSize} />
          <p className={style.iconName}>clock</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='card' color={newColor} size={newSize} />
          <p className={style.iconName}>card</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='copy' color={newColor} size={newSize} />
          <p className={style.iconName}>copy</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='delete' color={newColor} size={newSize} />
          <p className={style.iconName}>delete</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='download' color={newColor} size={newSize} />
          <p className={style.iconName}>download</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='edit' color={newColor} size={newSize} />
          <p className={style.iconName}>edit</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='externalLink' color={newColor} size={newSize} />
          <p className={style.iconName}>externalLink</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='hide' color={newColor} size={newSize} />
          <p className={style.iconName}>hide</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='show' color={newColor} size={newSize} />
          <p className={style.iconName}>show</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='facebook' color={newColor} size={newSize} />
          <p className={style.iconName}>facebook</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='file' color={newColor} size={newSize} />
          <p className={style.iconName}>file</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='filter' color={newColor} size={newSize} />
          <p className={style.iconName}>filter</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='flag' color={newColor} size={newSize} />
          <p className={style.iconName}>flag</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='gift' color={newColor} size={newSize} />
          <p className={style.iconName}>gift</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='heart' color={newColor} size={newSize} />
          <p className={style.iconName}>heart</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='helpCircle' color={newColor} size={newSize} />
          <p className={style.iconName}>helpCircle</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='instagram' color={newColor} size={newSize} />
          <p className={style.iconName}>instagram</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='image' color={newColor} size={newSize} />
          <p className={style.iconName}>image</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='link' color={newColor} size={newSize} />
          <p className={style.iconName}>link</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='linkedin' color={newColor} size={newSize} />
          <p className={style.iconName}>linkedin</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='lock' color={newColor} size={newSize} />
          <p className={style.iconName}>lock</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='logIn' color={newColor} size={newSize} />
          <p className={style.iconName}>logIn</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='logOut' color={newColor} size={newSize} />
          <p className={style.iconName}>logOut</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='mail' color={newColor} size={newSize} />
          <p className={style.iconName}>mail</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='mapPin' color={newColor} size={newSize} />
          <p className={style.iconName}>mapPin</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='increasePic' color={newColor} size={newSize} />
          <p className={style.iconName}>increasePic</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='decreasePic' color={newColor} size={newSize} />
          <p className={style.iconName}>decreasePic</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='minusCircle' color={newColor} size={newSize} />
          <p className={style.iconName}>minusCircle</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='minus' color={newColor} size={newSize} />
          <p className={style.iconName}>minus</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='moreHorizontal' color={newColor} size={newSize} />
          <p className={style.iconName}>moreHorizontal</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='moreVertical' color={newColor} size={newSize} />
          <p className={style.iconName}>moreVertical</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='paperclip' color={newColor} size={newSize} />
          <p className={style.iconName}>paperclip</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='phone' color={newColor} size={newSize} />
          <p className={style.iconName}>phone</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='plusCircle' color={newColor} size={newSize} />
          <p className={style.iconName}>plusCircle</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='plus' color={newColor} size={newSize} />
          <p className={style.iconName}>plus</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='search' color={newColor} size={newSize} />
          <p className={style.iconName}>search</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='settings' color={newColor} size={newSize} />
          <p className={style.iconName}>settings</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='cart' color={newColor} size={newSize} />
          <p className={style.iconName}>cart</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='tag' color={newColor} size={newSize} />
          <p className={style.iconName}>tag</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='trash' color={newColor} size={newSize} />
          <p className={style.iconName}>trash</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='truck' color={newColor} size={newSize} />
          <p className={style.iconName}>truck</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='user' color={newColor} size={newSize} />
          <p className={style.iconName}>user</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='crossCircle' color={newColor} size={newSize} />
          <p className={style.iconName}>crossCircle</p>
        </li>
        <li className={style.iconsItem}>
          <Icons name='cross' color={newColor} size={newSize} />
          <p className={style.iconName}>cross</p>
        </li>
      </ul>
    </>
  );
});
