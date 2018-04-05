import React from 'react';

export default function withAuth(Component){

  return (class extends React.Component{

    componentDidMount(){
      this._checkAndRedirect();
    }

    componentDidUpdate(){
      this._checkAndRedirect();
    }

    _checkAndRedirect(){
      if(!localStorage.getItem("token")){
        this.props.history.push("/login")
      }
    }

    render(){
      return <Component {...this.props} />
    }
  })
}
