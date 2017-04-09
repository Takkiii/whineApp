class Api::BooksController < ApplicationController
  def index
  	books = Book.select(:id, :title, :author, :published_date).all
  	render json: {
  		books: books.as_json,
  	}
  end
end
