import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import MemberRow from './MemberRow';
import MemberEntity from '../../api/memberEntity';
import loadMembers from '../../actions/loadMembers';
//
//
interface Props{
  members?: Array<any>;
  loadMembers: () => void;
}

class MemberPage extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public componentWillMount() {
    this.props.loadMembers();
  }

  public render() {
    if (!this.props.members) {
      return (<div>No Data</div>);
    }
    return(
      <div className="row">
        <h2>Members Page</h2>
        <Link to="/memberRegister">New Member</Link>
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
              this.props.members.map((member: MemberEntity) =>
                <MemberRow key={member.id} member={member}/>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps: any = (state: any) => {
  return {
    members: state.members
  };
};

const mapDispatchToProps: any = (dispatch: any) => {
  return {
    loadMembers: () => {return dispatch(loadMembers())}
  };
};

const ContainerMembersPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberPage);

export default ContainerMembersPage;
// export default MemberPage;
