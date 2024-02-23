import React from 'react';
import { IconProps, IconName } from './types';
import BurgerIcon from './IconsCollection/BurgerIcon';
import AlertCircleIcon from './IconsCollection/AlertCircleIcon';
import BookmarkIcon from './IconsCollection/BookmarkIcon';
import CameraIcon from './IconsCollection/CameraIcon';
import InfoIcon from './IconsCollection/InfoIcon';
import ArchiveIcon from './IconsCollection/ArchiveIcon';
import ArrowDownCircleIcon from './IconsCollection/ArrowDownCircleIcon';
import ArrowDownIcon from './IconsCollection/ArrowDownIcon';
import ArrowLeftCircleIcon from './IconsCollection/ArrowLeftCircleIcon';
import ArrowLeftIcon from './IconsCollection/ArrowLeftIcon';
import ArrowRightCircleIcon from './IconsCollection/ArrowRightCircleIcon';
import ArrowRightIcon from './IconsCollection/ArrowRightIcon';
import ArrowUpCircleIcon from './IconsCollection/ArrowUpCircleIcon';
import ArrowUpIcon from './IconsCollection/ArrowUpIcon';
import CheckIcon from './IconsCollection/CheckIcon';
import ChevronDownIcon from './IconsCollection/ChevronDownIcon';
import ChevronLeftIcon from './IconsCollection/ChevronLeftIcon';
import ChevronRightIcon from './IconsCollection/ChevronRightIcon';
import ChevronUpIcon from './IconsCollection/ChevronUpIcon';
import ClockIcon from './IconsCollection/ClockIcon';
import CardIcon from './IconsCollection/CardIcon';
import CopyIcon from './IconsCollection/CopyIcon';
import DeleteIcon from './IconsCollection/DeleteIcon';
import DownloadIcon from './IconsCollection/DownloadIcon';
import EditIcon from './IconsCollection/EditIcon';
import ExternalLinkIcon from './IconsCollection/ExternalLinkIcon';
import HideIcon from './IconsCollection/HideIcon';
import ShowIcon from './IconsCollection/ShowIcon';
import FacebookIcon from './IconsCollection/FacebookIcon';
import FileIcon from './IconsCollection/FileIcon';
import FilterIcon from './IconsCollection/FilterIcon';
import FlagIcon from './IconsCollection/FlagIcon';
import GiftIcon from './IconsCollection/GiftIcon';
import HeartIcon from './IconsCollection/HeartIcon';
import HelpCircleIcon from './IconsCollection/HelpCircleIcon';
import InstagramIcon from './IconsCollection/InstagramIcon';
import ImageIcon from './IconsCollection/ImageIcon';
import LinkIcon from './IconsCollection/LinkIcon';
import LinkedinIcon from './IconsCollection/LinkedinIcon';
import LockIcon from './IconsCollection/LockIcon';
import LogInIcon from './IconsCollection/LogInIcon';
import LogOutIcon from './IconsCollection/LogOutIcon';
import MailIcon from './IconsCollection/MailIcon';
import MapPinIcon from './IconsCollection/MapPinIcon';
import IncreasePicIcon from './IconsCollection/IncreasePicIcon';
import DecreasePicIcon from './IconsCollection/DecreasePicIcon';
import MinusCircleIcon from './IconsCollection/MinusCircleIcon';
import MinusIcon from './IconsCollection/MinusIcon';
import MoreHorizontalIcon from './IconsCollection/MoreHorizontalIcon';
import MoreVerticalIcon from './IconsCollection/MoreVerticalIcon';
import PaperclipIcon from './IconsCollection/PaperclipIcon';
import PhoneIcon from './IconsCollection/PhoneIcon';
import PlusCircleIcon from './IconsCollection/PlusCircleIcon';
import PlusIcon from './IconsCollection/PlusIcon';
import SearchIcon from './IconsCollection/SearchIcon';
import SettingsIcon from './IconsCollection/SettingsIcon';
import CartIcon from './IconsCollection/CartIcon';
import TagIcon from './IconsCollection/TagIcon';
import TrashIcon from './IconsCollection/TrashIcon';
import TruckIcon from './IconsCollection/TruckIcon';
import UserIcon from './IconsCollection/UserIcon';
import CrossCircleIcon from './IconsCollection/CrossCircleIcon';
import CrossIcon from './IconsCollection/CrossIcon';
import RefreshIcon from './IconsCollection/RefreshIcon';

export interface IconsProps extends IconProps {
  name: IconName;
}

const iconsMap = {
  alertCircle: AlertCircleIcon,
  burger: BurgerIcon,
  bookmark: BookmarkIcon,
  camera: CameraIcon,
  info: InfoIcon,
  archive: ArchiveIcon,
  arrowDownCircle: ArrowDownCircleIcon,
  arrowDown: ArrowDownIcon,
  arrowLeftCircle: ArrowLeftCircleIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRightCircle: ArrowRightCircleIcon,
  arrowRight: ArrowRightIcon,
  arrowUpCircle: ArrowUpCircleIcon,
  arrowUp: ArrowUpIcon,
  check: CheckIcon,
  chevronDown: ChevronDownIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  chevronUp: ChevronUpIcon,
  clock: ClockIcon,
  card: CardIcon,
  copy: CopyIcon,
  delete: DeleteIcon,
  download: DownloadIcon,
  edit: EditIcon,
  externalLink: ExternalLinkIcon,
  hide: HideIcon,
  show: ShowIcon,
  facebook: FacebookIcon,
  file: FileIcon,
  filter: FilterIcon,
  flag: FlagIcon,
  gift: GiftIcon,
  heart: HeartIcon,
  helpCircle: HelpCircleIcon,
  instagram: InstagramIcon,
  image: ImageIcon,
  link: LinkIcon,
  linkedin: LinkedinIcon,
  lock: LockIcon,
  logIn: LogInIcon,
  logOut: LogOutIcon,
  mail: MailIcon,
  mapPin: MapPinIcon,
  increasePic: IncreasePicIcon,
  decreasePic: DecreasePicIcon,
  minusCircle: MinusCircleIcon,
  minus: MinusIcon,
  moreHorizontal: MoreHorizontalIcon,
  moreVertical: MoreVerticalIcon,
  paperclip: PaperclipIcon,
  phone: PhoneIcon,
  plusCircle: PlusCircleIcon,
  plus: PlusIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  cart: CartIcon,
  tag: TagIcon,
  trash: TrashIcon,
  truck: TruckIcon,
  user: UserIcon,
  crossCircle: CrossCircleIcon,
  cross: CrossIcon,
  refresh: RefreshIcon,
};

export const Icons: React.FC<IconsProps> = ({ name, ...props }) => {
  const Component = iconsMap[name];

  return <Component {...props} />;
};
