export interface PostsProps {
  data: {
    per_page: number;
    current_page: number;
    total_files: number;
    last_page: number;
    files: FilesProp[];
    links: LinksProp;
    meta: MetaProps;
    path: string;
    to: number;
    total: number;
  };
}

export interface FilesProp {
  id: number;
  title: string;
  picture_path: string;
  user: UserProp;
}

export interface UserProp {
  id: number;
  username: string;
  profile_pic_path: string | null;
}

export interface LinksProp {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface MetaProps {
  current_page: number;
  from: number;
  last_page: number;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
}
