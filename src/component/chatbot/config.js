
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../options/Options";
import Name from "../options/Name";
import Age from "../options/Age";
import ExitPage from "../options/ExitPage";
const config = {
  botName:"YourBot",
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`,
  {widget:"options"})],
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

}

export default config