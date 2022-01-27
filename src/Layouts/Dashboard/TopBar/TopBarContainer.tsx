import TopBar from './TopBar';
import { INavigation, IUser, IUserNavigation } from './topbar.interfaces';

const user: IUser = {
  name: 'Some guy',
  email: 'someguy@outofthisworld.com',
  imageUrl:
    'https://images.unsplash.com/photo-1569775309692-fd5e62248d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
};
const navigation: INavigation[] = [
  { name: 'Dashboard', href: '/', current: true },
];
const userNavigation: IUserNavigation[] = [
  { name: 'Your Profile', href: '/' },
  { name: 'Settings', href: '/' },
  { name: 'Sign out', href: '/' },
];

/**
 * @param classes array of strings (`classNames`)
 * @returns compiled className string
 */
const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const TopBarContainer = () => {
  return (
    <TopBar
      user={user}
      navigation={navigation}
      userNavigation={userNavigation}
      classNames={classNames}
    />
  );
};

export default TopBarContainer;
