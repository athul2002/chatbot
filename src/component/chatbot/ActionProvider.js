class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,

   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage=createClientMessage;
   }

   handleGotIt=()=>{
    let message= this.createClientMessage("Got It");
    this.addMessageToState(message);
    message= this.createChatBotMessage("Enter your Name");
    this.addMessageToState(message);
   }
   ErrorMessg=()=>{
    const message= this.createChatBotMessage("Invalid Message",{widget:"options"});
    this.addMessageToState(message);
   }
   Name=()=>{
    const message=this.createChatBotMessage("Select You Age",{widget:"age"});
    this.addMessageToState(message);
   }
   agePage=(age)=>{
    let message=this.createClientMessage(`${age}`)
    this.addMessageToState(message);
    message=this.createChatBotMessage("Thank you. In 5 seconds, bot will exit",{widget:"exitPage"});
    this.addMessageToState(message);
   }

   addMessageToState=(message)=>{
    this.setState((prevState)=>({
      ...prevState,messages:[...prevState.messages,message],
    }))
   }
 }
 
 export default ActionProvider;