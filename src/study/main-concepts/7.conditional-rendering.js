import React from 'react';
import ReactDOM from 'react-dom';

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false }
    }

    handleLoginClick(){
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick(){
        this.setState({ isLoggedIn: false });
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        console.log(isLoggedIn);
        
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greating isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}


ReactDOM.render(
    <LoginControl />,
    document.getElementById("root7")
)


function UserGreeting(props){
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props){
    return <h1>Please sign up.</h1>;
}

function Greating(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    <Greating isLoggedIn={false} />,
    document.getElementById('root6')
)

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 3 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
}
  
const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root8')
);

//阻止组件渲染
function WarningBanner(props){
    if(!props.warn){
        return null;
    }
    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.state = {
            showWarning: true
        }
    }

    handleToggleClick() {
        this.setState((state) => ({
            showWarning: !state.showWarning
        }))
    }
    
    render(){
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'hide' : 'show'}
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById("root9")
)