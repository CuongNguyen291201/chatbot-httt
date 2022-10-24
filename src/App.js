import './App.css';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial",
  headerBgColor: "#1976d2",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#fff",
  botFontColor: "black",
  userBubbleColor: "#1976d2",
  userFontColor: "#fff"
};

const steps = [
  {
    id: 1,
    message: 'What number I am thinking?',
    trigger: 2,
  },
  {
    id: 2,
    options: [
      { value: 1, label: 'Number 1', trigger: 4 },
      { value: 2, label: 'Number 2', trigger: 3 },
      { value: 3, label: 'Number 3', trigger: 3 },
    ]
  },
  {
    id: 3,
    message: 'Wrong answer, try again.',
    trigger: 2,
  },
  {
    id: 4,
    message: 'Awesome! You are a telepath!',
    end: true,
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Hệ thống tư vấn đồ điện tử"
        steps={steps}
      />

    </ThemeProvider>
  );
}

export default App;
