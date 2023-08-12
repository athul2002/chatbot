class MessageParser {
    constructor(actionProvider, setStateFunc) {
      this.actionProvider = actionProvider;
      this.setState = setStateFunc;
    }
  
    parse(message) {

      const lowercase=message.toLowerCase();
      const len=this.setState.messages.length
      if((len<2 )|| (len>2 && this.setState.messages[len-1].message !== "Enter your Name"))
      {
        return this.actionProvider.ErrorMessg();
      }
      if(lowercase.length>0)
      {
        return this.actionProvider.Name(lowercase);
      }

        return this.actionProvider.ErrorMessg();

    }
  }
  
  export default MessageParser;