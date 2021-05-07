import React from 'react';

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({posts:data.slice(0,5)}))
    }

    render(){
        return(
            <div className='container'>
            <h1>{this.props.name}</h1>
            <h1>{this.props.email}</h1>

            Posts: {
                    this.state.posts.map(post => <div className="post">
                        <h1>{post.username}</h1>
                        <p>{post.email}</p>
                    </div>)
            }
            </div>
        );
    }
}

export default UserList;