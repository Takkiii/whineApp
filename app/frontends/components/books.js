import React from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'

class Books extends React.Component {
	constructor() {
		super()
		this.state = {
			books: [],
		}
	}

	componentWillMount() {
		this.getState()
	}

	getState() {
		request
			.get('/api/books/index')
			.end((error, res) => {
				if (!error && res.status === 200) {
					const json = JSON.parse(res.text)
					this.setState({
						books: json.books,
					})
				} else {
					reject(res)
				}
			})
	}

	render() {
		const {books} = this.state
		const headers = books[0] != null ? Object.keys(books[0]) : []
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
					<tbody>
						{books.map((book, index) => {
							return (
								<tr key={index}>
									{Object.values(book).map((row, index) => {
										return (
											<td key={index}>{row}</td>
										)
									})}
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

ReactDOM.render(
	<Books />,
	document.getElementById("books")
)