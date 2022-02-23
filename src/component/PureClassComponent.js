import React, { Component ,PureComponent} from 'react'
/* extend PureComponent to make the class components PureComponents */
export  class PureClassComponent extends PureComponent {
    state ={
        userName:'',
        age:10,
        address: {
            state: 'Karnataka'
        }
    }

    updateName = () => {
        console.log('updatName executed');
        this.setState({
            userName:'Guru'
        })
    }
   
    updateAddress = () => {
        this.setState({
            address:{
                state: 'Tamilnadu'
            }
        })
    }
    componentDidUpdate(){
        console.log('component did update executed');
    }
    /* if we extend pureComponent react will do a shallow comparition of the prev state and next state
     we shold not write sholudComponentUpdate when extending PureComponent because react will write the logic of comparition in sholudComponentUpdate

     shouldComponentUpdate(nextProps,nextState){
         console.log('sholudComponentUpdate executed');
         console.log(nextState);
         console.log(this.state);
         if(nextState.userName !== this.state.userName)
         {
             return true
         }else{
             return false
         }
     } */
    render() {
        console.log('render executed');
        return (
            <div>
                <p>User name -{this.state.userName}</p>
                <p>Address - {this.state.address.state}</p>

                <button onClick={() =>{
                    this.updateName()
                }}>Update Name</button>
                <button onClick={() => {
                    this.updateAddress()
                }}>Update Address</button>
            </div>
        )
    }
}
