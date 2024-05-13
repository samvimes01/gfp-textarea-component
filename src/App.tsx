import './App.css'
import TextArea from './components/TextArea/TeaxtArea'

function App() {
  return (
    <div className="card">
      <TextArea label="Description" placeholder="Write your message..." />
      <TextArea label="Description" placeholder="Enter a description..." />
      <TextArea label="Description" placeholder="Write your message..." disabled />
    </div>
  )
}

export default App
