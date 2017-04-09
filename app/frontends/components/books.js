import React from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import {Card, CardHeader} from 'material-ui/Card'

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
			<MuiThemeProvider>
				<Card>
					<CardHeader title="BookApp" />
					<Table>
				    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
				      <TableRow>
				      	{headers.map((header, index) => {
									return (
										<TableHeaderColumn key={index}>{header}</TableHeaderColumn>
									)
								})}
				      </TableRow>
				    </TableHeader>
				    <TableBody displayRowCheckbox={false}>
				    	{books.map((book, index) => {
								return (
									<TableRow key={index}>
										{Object.values(book).map((row, index) => {
											return (
												<TableRowColumn key={index}>{row}</TableRowColumn>
											)
										})}
						      </TableRow>
								)
							})}
				    </TableBody>
				  </Table>
				</Card>
			</MuiThemeProvider>
		)
	}
}

ReactDOM.render(
	<Books />,
	document.getElementById("books")
)