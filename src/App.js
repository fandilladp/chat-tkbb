import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './component/ChatFeed';
import './App.css';

const App = () => {
    return(
        <ChatEngine
            height='100vh'
            projectID="e33862e0-61b1-4247-b21e-78001690b309"
            userName="fandilladp"
            userSecret="123123"

            renderChatFeed={(chatAppProps)=> <ChatFeed{...chatAppProps}/>}
        />
    );
}

export default App;