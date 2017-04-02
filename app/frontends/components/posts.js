import React from 'react'
import ReactDOM from 'react-dom'

class Posts extends React.Component {
	render() {
		const headers = ["タイトル", "著者", "言語", "出版年", "売上部数",]
		return (
			<div>
				<h1>WhineApp</h1>
				<table>
					<thead>
						<tr>
							{headers.map((header, index) => {
								return (
									<th key={index}>{header}</th>
								)
							})}
						</tr>
					</thead>
				</table>
			</div>
		)
	}
}

ReactDOM.render(
	<Posts />,
	document.getElementById("posts")
)