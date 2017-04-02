import React from 'react'
import ReactDOM from 'react-dom'

class Books extends React.Component {
	render() {
		const headers = ["タイトル", "著者", "出版年",]
		return (
			<div>
				<h1>BookApp</h1>
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
	<Books />,
	document.getElementById("books")
)