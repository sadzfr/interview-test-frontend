export interface IUser {
  name: string;
  email: string;
  imageUrl: string;
}

export interface INavigation {
  name: string;
  href: string;
  current: boolean;
}

export interface IUserNavigation {
  name: string;
  href: string;
  onClick: () => void
}

export interface IProps {
  user: IUser;
  navigation: INavigation[];
  userNavigation: IUserNavigation[];
  classNames: (...classes: string[]) => string;
}
