import React from 'react'
import ReactDOM from 'react-dom'

class Posts extends React.Component {
	render() {
		const headers = ["タイトル", "著者", "出版社", "出版年",]
		return (
			<div>
				<h1>WhineApp</h1>
				<table>
					<thead>
						<tr>
							{headers.map((header) => {
								return (
									<th>{header}</th>
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
	React.createElement(Posts),
	document.getElementById("posts")
)