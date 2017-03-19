import React from 'react'
import ReactDOM from 'react-dom'

class MyComponent extends React.Component {
	render() {
		return (
			<h1>マイコンポーネント</h1>
		)
	}
}

ReactDOM.render(
	React.createElement(MyComponent),
	document.getElementById("myComponent")
)

