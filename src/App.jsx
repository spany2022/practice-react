function Header(){
  return (
    <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      Fundamental React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}


function App() {
  return (
    <div>
    <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

// File Extensions in React Projects: .jsx is not supported by browsers but works in React projects because of the build process that recognizes JSX code.
// Using .jsx or .js: Both .jsx and .js can contain JSX code. The choice depends on the project’s build setup. Some projects require .jsx, others use .js with JSX.
// File Imports: Some projects require the extension in imports (e.g., import App from './App.jsx'), while others do not (import App from './App').
// No Browser Impact: The file extension doesn't matter to the browser; it's a build process concern.
