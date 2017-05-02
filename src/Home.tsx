import * as React from 'react';


interface HomeProps extends React.Props<any> {
  name: string;
}

class Home extends React.Component<HomeProps, null>{
  render(){
    return(
      <div>Home!! {this.props.name}</div>
    )
  }
};


export default Home;
