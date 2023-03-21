import { uuid } from 'uuidv4';

type UserProps = {
  name: string;
  email: string;
  password: string;
  birthDate: string;
}

export class User {
  public readonly id;
  public props: Required<UserProps>;

  constructor(props: UserProps, id?: string) {
    this.id = id || uuid();
    this.props = props;
  }
}