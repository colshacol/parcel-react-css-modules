import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const App = () => (
  <div styleName="App">
    <If condition={true}>yolo</If>
    <p>App here.</p>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
