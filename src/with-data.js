import React from 'react';
const withData = (component, dataSource) => {
    class WithData extends React.Component {
        constructor(props){
            super(props);
            this.state ={
                posts:[]
            };
        }

        componentDidMount(){
            
            fetch(dataSource)
            .then(response => response.json())
            .then(data => this.setState({posts:data.slice(0,5)}))
        }

        render()
        {

            return
                <WrappedComponent data={this.state.data} {...this.props}/>;
        }
    
    }
    return WithData;
}


export default withData;