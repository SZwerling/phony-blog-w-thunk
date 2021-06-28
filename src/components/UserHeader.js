import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    
    render(){
        const { user } = this.props
        if(!user){
            return <div>nothing came back</div>
        };

        return(
            <div className="header">{user.name}, {user.email}</div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(UserHeader);