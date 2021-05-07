import React from 'react';

class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
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
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>)
            }
            </div>
        );
    }
}

export default UserProfile;