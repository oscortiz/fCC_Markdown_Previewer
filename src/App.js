import React, { Component } from 'react';
import Header from './componentes/Header';
import Editor from './componentes/Editor';
import Preview from './componentes/Preview';
import marked from 'marked';

class App extends Component {

  constructor() {
    super();

    this.state = {
      markdown: ''
    }

    marked.setOptions({
      breaks: true,
    });

    this.initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
      
Heres some code, \`<div></div>\`, between 2 backticks.
    
\`\`\`
// this is multi-line code:
    
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
      
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
    
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
    
And if you want to get really crazy, even tables:
    
Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
    
- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.
    
    
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
    
![React Logo w/ Text](https://goo.gl/Umyytc)
    `
  }

  componentDidMount() {
    this.handleChange(this.initialText);
  }

  handleChange = text => {
    this.setState({
      markdown: marked(text)
    });    
  }

  render() {
    return (
      <div className="App">
        <Header 
          title="Markdown Previewer"
          guidelines="Enter your text into the editor (left) using markdown syntax to preview (right) the result"
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <Editor 
                initialText={this.initialText}
                handleChange={this.handleChange}
              />
            </div>

            <div className="col-md-6">
              <Preview 
                markdown={this.state.markdown}
              />  
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
