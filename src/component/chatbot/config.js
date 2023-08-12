import { createChatBotMessage} from "react-chatbot-kit";
import Options from "../options/Options";
import Age from "../options/Age";
import ExitPage from "../options/ExitPage";
const config = {
  botName:"YourBot",
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`,
  {widget:"options"})],
  customComponents: {},
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    
    {
      widgetName: "age",
      widgetFunc: (props) => <Age {...props} />,
    },
    {
      widgetName: "exitPage",
      widgetFunc: (props) => <ExitPage {...props} />,
    },
  ],
  // customComponents:
}

export default config