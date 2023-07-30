// MessageParser starter code
class MessageParser {
    constructor(actionProvider, setStateFunc) {
      this.actionProvider = actionProvider;
      this.setState = setStateFunc;
    }
  
    parse(message) {
      const lowercase=message.toLowerCase();

      if(lowercase.includes("Got It!"))
      {
        this.actionProvider.greet();
      }

      if(lowercase!=="Got It")
      {
        this.actionProvider.Name();
      }
    }
  }
  
  export default MessageParser;