class Api::V1::BoardsController < ApplicationController
  before_action :set_board, only: %i[show update destroy]

  def index
    render json: Board.all
  end

  def show
    render json: @board
  end

  def create
    @board = Board.new(board_params)
    respond_with_validations(success_status: :created) { @board.save }
  end

  def update
    respond_with_validations { @board.update(board_params) }
  end

  def destroy
    respond_with_validations { @board.destroy }
  end

  private

  def set_board
    @board = Board.find(params[:id])
  end

  def board_params
    params.require(:board).permit(:title)
  end
end
