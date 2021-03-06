//mostly code from reactjs.org/docs/error-boundries.html
import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundry extends Component{
    state = { 
        hasError:false,
        redirect:false
    }

    static getDerivedStateFromError(){
        return {hasError:true};
    }

    componentDidCatch(error,info){
        console.error("ErrorBoundry caught an error",error,info);
    }

    componentDidUpdate(){
        setTimeout(()=>this.setState({redirect:true}),5000);
    }

    render(){
        if(this.state.redirect){
            return <Redirect to="/" />
        }
        if(this.state.hasError){
            return(
                <h1>
                    There was an error with this listing. 
                    <Link to="/">Click Here</Link> to go back to the home page or wait for five seconds.
                </h1>
            ) 
        }
        return this.props.children;
    }
}

export default ErrorBoundry;