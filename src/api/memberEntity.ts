export default class MemberEntity {
  public id: number;
  public login: string;
  public avatarUrl: string;

  constructor() {
    this.id = -1;
    this.login = '';
    this.avatarUrl = '';
  }
}
