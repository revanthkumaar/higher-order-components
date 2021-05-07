import React from 'react';

//import higher order component

import withData from '../../with-data';

const UserProfile = ({data}) => (
   
        <div className='container'>
    

        Posts: {
               data.map(post => <div className="post">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>)
        }
        </div>

)


//wrapping the component to HOC
export default withData(UserProfile);