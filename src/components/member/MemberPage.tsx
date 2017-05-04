import * as React from 'react';
import MemberRow from './MemberRow';
import MemberEntity from '../../api/memberEntity';
import MemberAPI from '../../api/memberAPI';

interface State {
  members: Array<MemberEntity>;
}

class MemberPage extends React.Component<any , State> {
  constructor(props: any) {
    super(props);
    // set initial state
    this.state = {
      members: []
    };
  }

  public componentWillMount() {
    // var promise : Q.Promise<MemberEntity[]> = MemberAPI.getAllMembersAsync();
    // promise.done(function(members: any){
    //   this.setState({
    //     members: members
    //   });
    // });
    this.setState({
      members: MemberAPI.getAllMembers()
    });
  }

  public render() {
    return(
      <div className="row">
        <h2>Members Page</h2>
        <table className="table">
          <thead>
            <tr>
              <th>
                Avatar
              </th>
              <th>
                ID
              </th>
              <th>
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.members.map((member: MemberEntity) =>
                <MemberRow key={member.id} member={member}/>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default MemberPage;
