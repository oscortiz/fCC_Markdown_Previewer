(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),s=(n(14),n(1)),l=n(2),c=n(4),d=n(3),m=n(5),h=function(e){return r.a.createElement("nav",{className:"navbar mb-4 shadow text-center"},r.a.createElement("span",{className:"w-100 mt-2 h2 text-white"},e.title),r.a.createElement("span",{className:"w-100 mb-3 d-none d-sm-block text-white lead"},e.guidelines))},u=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){e.preventDefault(),n.props.handleChange(n.markdownRef.current.value)},n.markdownRef=r.a.createRef(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card shadow-lg m-2"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:"col-12 lead font-weight-bolder"},"Markdown Editor")),r.a.createElement("div",{className:"card-body"},r.a.createElement("textarea",{ref:this.markdownRef,className:"col-12 shadow-lg",rows:"25",id:"editor",defaultValue:this.props.initialText,onChange:this.handleChange,type:"text"})))}}]),t}(a.Component),w=function(e){return r.a.createElement("div",{className:"card shadow-lg m-2"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:"col-12 lead font-weight-bolder"},"Markdown Previewer")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"w-100 p-2",id:"preview",dangerouslySetInnerHTML:{__html:e.markdown}})))},f=n(6),v=n.n(f),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).handleChange=function(t){e.setState({markdown:v()(t)})},e.state={markdown:""},v.a.setOptions({breaks:!0}),e.initialText="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n      \nHeres some code, `<div></div>`, between 2 backticks.\n    \n```\n// this is multi-line code:\n    \nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n      \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n    \nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n    \nAnd if you want to get really crazy, even tables:\n    \nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n    \n- And of course there are lists.\n  - Some are bulleted.\n    - With different indentation levels.\n      - That look like this.\n    \n    \n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n    \n![React Logo w/ Text](https://goo.gl/Umyytc)\n    ",e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.handleChange(this.initialText)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{title:"Markdown Previewer",guidelines:"Enter your text into the editor (left) using markdown syntax to preview (right) the result"}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(u,{initialText:this.initialText,handleChange:this.handleChange})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(w,{markdown:this.state.markdown})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.fff5caab.chunk.js.map