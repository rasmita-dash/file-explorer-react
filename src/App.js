import logo from './logo.svg';
import './App.css';
import Directory from './Directory';

const File = [
  { name: "Directory 1", type: "Directory", content:[
    {name: "File1", type: "File"},
    {name: "File2", type: "File"}]
  },
  {
    name: "Directory 2", type: "Directory", content:[
      {name: "File3", type: "File"},
      { name: "DIrectory 3", type: "Directory", content:[
        {name: "File4", type: "File"},
        {name: "File5", type: "File"}] }]
  },
  { name: "Directory 4", type: "Directory", content:[
    {name: "File7", type: "File"},
    {name: "File8", type: "File"}]
  },
  { name: "File6", type: "File" },
]

function App() {
  return (
    <div className="App">
      {
        File.map((file, index) => {
          return <Directory key={index} content = {file} indent={0}/>
        })
      }
      
    </div>
  );
}

export default App;
