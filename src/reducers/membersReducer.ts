import MemberEntity from "../api/memberEntity";

export default (state: Array<MemberEntity> = [], action: any) => {
  switch (action.type) {
    case 'MEMBERS_LOAD':
      return [...action.members];
    default:
      return state;
  }
};
