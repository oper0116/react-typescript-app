import * as React from 'react';
import MemberEntity from '../../api/memberEntity';
import Input from '../common/textInput';

interface Props extends React.Props<MemberRegisterForm> {
  member: MemberEntity
  onChange: (event:any) => any;
  onSave: (event:any) => any;
  errors: any;
}

class MemberRegisterForm extends React.Component<Props, any> {
  public render() {
    return(
      <form>
        <h1>Manage Member</h1>
        <Input
          name="login"
          label="login"
          value={this.props.member.login}
          onChange={this.props.onChange}
          error={this.props.errors.login} />
        <Input
          name="avatar_url"
          label="avatar_url"
          value={this.props.member.avatarUrl}
          onChange={this.props.onChange}
          error={this.props.errors.avatar_url}/>
        <input
          type="button"
          value="Save"
          className="btn btn-default"
          onClick={this.props.onSave}/>
      </form>
    );
  }
}

export default MemberRegisterForm;
