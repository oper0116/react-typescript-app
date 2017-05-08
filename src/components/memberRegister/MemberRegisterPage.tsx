import * as React from 'react';
import objectAssign = require('object-assign');
import * as toastr from 'toastr';
import MemberEntity from '../../api/memberEntity';
import MemberRegisterForm from './MemberRegisterForm';

// import MemberRegisterForm from './MemberRegisterForm';

interface State {
  member: MemberEntity,
  errors: any,
  dirty: boolean
}

class MemberRegisterPage extends React.Component<any, State> {

  constructor(props: any){
    super(props);
    this.state = {
      member: new MemberEntity(),
      errors: {},
      dirty: false
    };
  }

  setMemberState(event: any) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.member[field] = value;
    var newState: State = objectAssign({}, this.state, {dirte: true, member: this.state.member});
    return this.setState(newState);
  }

  memberFormIsValid() {
    var formIsValid = true;
    var initialState: State = objectAssign({}, this.state, {error: ''});
    this.setState(initialState);

    if (this.state.member.login.length < 3) {
      this.state.errors.login = 'Login must be at least 3 characters.';
      formIsValid = false;
    }
    var newState: State = objectAssign({}, this.state, {error: this.state.errors});
    this.setState(newState);

    return formIsValid;
  }

  public saveMember(event: any) {
    event.preventDefault();
    if (!this.memberFormIsValid) {
      return;
    }
    var newState: State = objectAssign({}, this.state, {error: this.state.errors});
    this.setState(newState);
    toastr.success('Author saved.');
  }

  public render() {
    return(
      <MemberRegisterForm
        member={this.state.member}
        errors={this.state.errors}
        onChange={this.setMemberState.bind(this)}
        onSave={this.saveMember.bind(this)}
      />
    );
  }
}

export default MemberRegisterPage;
