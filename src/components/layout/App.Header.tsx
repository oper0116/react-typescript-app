import * as React from 'react';
import AppBar from 'material-ui/AppBar';



class AppHeader extends React.Component<{}, null>{
  render(){
    return(
      <AppBar
        title = "AppBAR!!"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    )
  }
}


export default AppHeader;
