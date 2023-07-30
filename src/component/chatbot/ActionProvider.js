// ActionProvider starter code
import Name from "../options/Name";
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
   }

   greet=()=>{
    const message=this.createChatBotMessage("hello");
    this.addMessageToState(message);
   }
   handleGotIt=()=>{
    const message=this.createChatBotMessage("Enter your Name");
    this.addMessageToState(message);
   }
   Name=()=>{
    const message=this.createChatBotMessage("Select You Age",{widget:"age"});
    this.addMessageToState(message);
   }
   agePage=()=>{
    
    const message=this.createChatBotMessage("Thank you. In 5 seconds, bot will exit",{widget:"exitPage"});
    this.addMessageToState(message);
   }
   addMessageToState=(message)=>{
    this.setState((prevState)=>({
      ...prevState,messages:[...prevState.messages,message],
    }))
   }
 }
 
 export default ActionProvider;