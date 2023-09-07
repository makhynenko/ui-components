import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Icons } from './Icons';
import { Input } from '../Input';


storiesOf('Icons', module)
  .add('Default', () => {
    const [newColor, setColor] = useState<string>('#000');
    const [newSize, setSize] = useState<number>(24);

    const onColorChange = (e) => {
      if (e.target.value.trim().length === 0) {
        setColor('black')
      } else {
        setColor(e.target.value)
      }
    }

    const onSizeChange = (e) => {
      if (e.target.value.trim().length === 0) {
        setSize(24)
      } else {
        setSize(e.target.value)
      }
    }

    return (
      <>
        <Input placeholder={'Please insert color'} onChange={onColorChange} />
        <Input placeholder={'Please insert size (number only)'} onChange={onSizeChange} />
        <ul className='iconsList'>
          <li className='iconsItem'>
            <Icons name='burger' color={newColor} size={newSize} />
            <p className='iconName'>burger</p>
          </li>
          <li className='iconsItem'>
            <Icons name='alertCircle' color={newColor} size={newSize} />
            <p className='iconName'>alertCircle</p>
          </li>
          <li className='iconsItem'>
            <Icons name='bookmark' color={newColor} size={newSize} />
            <p className='iconName'>bookmark</p>
          </li>
          <li className='iconsItem'>
            <Icons name='camera' color={newColor} size={newSize} />
            <p className='iconName'>camera</p>
          </li>
          <li className='iconsItem'>
            <Icons name='info' color={newColor} size={newSize} />
            <p className='iconName'>info</p>
          </li>
          <li className='iconsItem'>
            <Icons name='archive' color={newColor} size={newSize} />
            <p className='iconName'>archive</p>
          </li>
          <li className='iconsItem'>
            <Icons name='arrowDownCircle' color={newColor} size={newSize} />
            <p className='iconName'>arrowDownCircle</p>
          </li>
          <li className='iconsItem'>
            <Icons name='arrowDown' color={newColor} size={newSize} />
            <p className='iconName'>arrowDown</p>
          </li>
          <li className='iconsItem'>
            <Icons name='arrowLeftCircle' color={newColor} size={newSize} />
            <p className='iconName'>arrowLeftCircle</p>
          </li>
          <li className='iconsItem'>
            <Icons name='arrowLeft' color={newColor} size={newSize} />
            <p className='iconName'>arrowLeft</p>
          </li>
          <li className='iconsItem'>
            <Icons name='arrowRightCircle' color={newColor} size={newSize} />
            <p className='iconName'>arrowRightCircle</p>
          </li>
          <li className='iconsItem'>
            <Icons name='arrowRight' color={newColor} size={newSize} />
            <p className='iconName'>arrowRight</p>
          </li>
          <li className='iconsItem'>
            <Icons name='arrowUpCircle' color={newColor} size={newSize} />
            <p className='iconName'>arrowUpCircle</p>
          </li>
          <li className='iconsItem'>
            <Icons name='arrowUp' color={newColor} size={newSize} />
            <p className='iconName'>arrowUp</p>
          </li>
          <li className='iconsItem'>
            <Icons name='check' color={newColor} size={newSize} />
            <p className='iconName'>check</p>
          </li>
          <li className='iconsItem'>
            <Icons name='chevronDown' color={newColor} size={newSize} />
            <p className='iconName'>chevronDown</p>
          </li>
          <li className='iconsItem'>
            <Icons name='chevronLeft' color={newColor} size={newSize} />
            <p className='iconName'>chevronLeft</p>
          </li>
          <li className='iconsItem'>
            <Icons name='chevronRight' color={newColor} size={newSize} />
            <p className='iconName'>chevronRight</p>
          </li>
          <li className='iconsItem'>
            <Icons name='chevronUp' color={newColor} size={newSize} />
            <p className='iconName'>chevronUp</p>
          </li>
          <li className='iconsItem'>
            <Icons name='clock' color={newColor} size={newSize} />
            <p className='iconName'>clock</p>
          </li>
          <li className='iconsItem'>
            <Icons name='card' color={newColor} size={newSize} />
            <p className='iconName'>card</p>
          </li>
          <li className='iconsItem'>
            <Icons name='copy' color={newColor} size={newSize} />
            <p className='iconName'>copy</p>
          </li>
          <li className='iconsItem'>
            <Icons name='delete' color={newColor} size={newSize} />
            <p className='iconName'>delete</p>
          </li>
          <li className='iconsItem'>
            <Icons name='download' color={newColor} size={newSize} />
            <p className='iconName'>download</p>
          </li>
          <li className='iconsItem'>
            <Icons name='edit' color={newColor} size={newSize} />
            <p className='iconName'>edit</p>
          </li>
          <li className='iconsItem'>
            <Icons name='externalLink' color={newColor} size={newSize} />
            <p className='iconName'>externalLink</p>
          </li>
          <li className='iconsItem'>
            <Icons name='hide' color={newColor} size={newSize} />
            <p className='iconName'>hide</p>
          </li>
          <li className='iconsItem'>
            <Icons name='show' color={newColor} size={newSize} />
            <p className='iconName'>show</p>
          </li>
          <li className='iconsItem'>
            <Icons name='facebook' color={newColor} size={newSize} />
            <p className='iconName'>facebook</p>
          </li>
          <li className='iconsItem'>
            <Icons name='file' color={newColor} size={newSize} />
            <p className='iconName'>file</p>
          </li>
          <li className='iconsItem'>
            <Icons name='filter' color={newColor} size={newSize} />
            <p className='iconName'>filter</p>
          </li>
          <li className='iconsItem'>
            <Icons name='flag' color={newColor} size={newSize} />
            <p className='iconName'>flag</p>
          </li>
          <li className='iconsItem'>
            <Icons name='gift' color={newColor} size={newSize} />
            <p className='iconName'>gift</p>
          </li>
          <li className='iconsItem'>
            <Icons name='heart' color={newColor} size={newSize} />
            <p className='iconName'>heart</p>
          </li>
          <li className='iconsItem'>
            <Icons name='helpCircle' color={newColor} size={newSize} />
            <p className='iconName'>helpCircle</p>
          </li>
          <li className='iconsItem'>
            <Icons name='instagram' color={newColor} size={newSize} />
            <p className='iconName'>instagram</p>
          </li>
          <li className='iconsItem'>
            <Icons name='image' color={newColor} size={newSize} />
            <p className='iconName'>image</p>
          </li>
          <li className='iconsItem'>
            <Icons name='link' color={newColor} size={newSize} />
            <p className='iconName'>link</p>
          </li>
          <li className='iconsItem'>
            <Icons name='linkedin' color={newColor} size={newSize} />
            <p className='iconName'>linkedin</p>
          </li>
          <li className='iconsItem'>
            <Icons name='lock' color={newColor} size={newSize} />
            <p className='iconName'>lock</p>
          </li>
          <li className='iconsItem'>
            <Icons name='logIn' color={newColor} size={newSize} />
            <p className='iconName'>logIn</p>
          </li>
          <li className='iconsItem'>
            <Icons name='logOut' color={newColor} size={newSize} />
            <p className='iconName'>logOut</p>
          </li>
          <li className='iconsItem'>
            <Icons name='mail' color={newColor} size={newSize} />
            <p className='iconName'>mail</p>
          </li>
          <li className='iconsItem'>
            <Icons name='mapPin' color={newColor} size={newSize} />
            <p className='iconName'>mapPin</p>
          </li>
          <li className='iconsItem'>
            <Icons name='increasePic' color={newColor} size={newSize} />
            <p className='iconName'>increasePic</p>
          </li>
          <li className='iconsItem'>
            <Icons name='decreasePic' color={newColor} size={newSize} />
            <p className='iconName'>decreasePic</p>
          </li>
          <li className='iconsItem'>
            <Icons name='minusCircle' color={newColor} size={newSize} />
            <p className='iconName'>minusCircle</p>
          </li>
          <li className='iconsItem'>
            <Icons name='minus' color={newColor} size={newSize} />
            <p className='iconName'>minus</p>
          </li>
          <li className='iconsItem'>
            <Icons name='moreHorizontal' color={newColor} size={newSize} />
            <p className='iconName'>moreHorizontal</p>
          </li>
          <li className='iconsItem'>
            <Icons name='moreVertical' color={newColor} size={newSize} />
            <p className='iconName'>moreVertical</p>
          </li>
          <li className='iconsItem'>
            <Icons name='paperclip' color={newColor} size={newSize} />
            <p className='iconName'>paperclip</p>
          </li>
          <li className='iconsItem'>
            <Icons name='phone' color={newColor} size={newSize} />
            <p className='iconName'>phone</p>
          </li>
          <li className='iconsItem'>
            <Icons name='plusCircle' color={newColor} size={newSize} />
            <p className='iconName'>plusCircle</p>
          </li>
          <li className='iconsItem'>
            <Icons name='plus' color={newColor} size={newSize} />
            <p className='iconName'>plus</p>
          </li>
          <li className='iconsItem'>
            <Icons name='search' color={newColor} size={newSize} />
            <p className='iconName'>search</p>
          </li>
          <li className='iconsItem'>
            <Icons name='settings' color={newColor} size={newSize} />
            <p className='iconName'>settings</p>
          </li>
          <li className='iconsItem'>
            <Icons name='cart' color={newColor} size={newSize} />
            <p className='iconName'>cart</p>
          </li>
          <li className='iconsItem'>
            <Icons name='tag' color={newColor} size={newSize} />
            <p className='iconName'>tag</p>
          </li>
          <li className='iconsItem'>
            <Icons name='trash' color={newColor} size={newSize} />
            <p className='iconName'>trash</p>
          </li>
          <li className='iconsItem'>
            <Icons name='truck' color={newColor} size={newSize} />
            <p className='iconName'>truck</p>
          </li>
          <li className='iconsItem'>
            <Icons name='user' color={newColor} size={newSize} />
            <p className='iconName'>user</p>
          </li>
          <li className='iconsItem'>
            <Icons name='crossCircle' color={newColor} size={newSize} />
            <p className='iconName'>crossCircle</p>
          </li>
          <li className='iconsItem'>
            <Icons name='cross' color={newColor} size={newSize} />
            <p className='iconName'>cross</p>
          </li>
        </ul>
      </>
    )
  }
  )