import "./App.css";
import TextArea from "./components/TextArea/TeaxtArea";

function App() {
  return (
    <div className="flex gap-8 flex-col w-[340px] px-0 py-[112px]">
      <TextArea label="Description" placeholder="Write your message..." />
      <TextArea
        label="Description"
        placeholder="Enter a description..."
        error="This field is required"
      />
      <TextArea
        label="Description"
        placeholder="Write your message..."
        disabled
      />
    </div>
  );
}

export default App;
