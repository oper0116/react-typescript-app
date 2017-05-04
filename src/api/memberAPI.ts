import * as $ from 'jquery';
import * as Q from 'q';
import MemberEntity from './memberEntity';
import MembersMockData from './memberMockData';

class MemberAPI {

  public getAllMembers(): Array<MemberEntity> {
    return this._clone(MembersMockData);
  };

  public getAllMembersAsync(): Q.Promise<MemberEntity[]> {
    var deferred = Q.defer<Array<MemberEntity>>();
    $.getJSON('https://api.github.com/orgs/lemoncode/members', function(data: any){
      var members: Array<MemberEntity>;
      members = data.map((d: any) => {
        var member : MemberEntity = new MemberEntity();
        member.id =  d.id;
        member.login = d.login;
        member.avatarUrl = d.avatar_url;

        return member;
      });

      deferred.resolve(members);
    });

    return deferred.promise;
  }

  private _clone(item: Object) {
    return JSON.parse(JSON.stringify(item));
  };
}

export default new MemberAPI();
