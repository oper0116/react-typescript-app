import * as _ from 'lodash';
import MemberEntity from './memberEntity';
import MembersMockData from './memberMockData';

class MemberAPI {

  private _idSeed: number;

  public constructor() {
    this._idSeed = 20;
  }

  public _generateId(): number {
    return this._idSeed++;
  }

  public getAllMembers(): Array<MemberEntity> {
    return this._clone(MembersMockData);
  };

  public saveAuthor(member: MemberEntity) {
    console.log('[Ajax Call]');
    if (member.id !== -1) {
      var existingAuthorIndex = _.indexOf(MembersMockData, _.find(MembersMockData, {id: member.id}));
      MembersMockData.splice(existingAuthorIndex, 1, member);
    } else {
      member.id = this._generateId();
      MembersMockData.push(this._clone(member));
    }
  }

  // public getAllMembersAsync(): Q.Promise<MemberEntity[]> {
  //   var deferred = Q.defer<Array<MemberEntity>>();
  //   $.getJSON('https://api.github.com/orgs/lemoncode/members', function(data: any){
  //     var members: Array<MemberEntity>;
  //     members = data.map((d: any) => {
  //       var member : MemberEntity = new MemberEntity();
  //       member.id =  d.id;
  //       member.login = d.login;
  //       member.avatarUrl = d.avatar_url;
  //
  //       return member;
  //     });
  //
  //     deferred.resolve(members);
  //   });
  //
  //   return deferred.promise;
  // }

  private _clone(item: Object) {
    return JSON.parse(JSON.stringify(item));
  };

}

export default new MemberAPI();
