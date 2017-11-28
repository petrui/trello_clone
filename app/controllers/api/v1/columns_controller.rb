class Api::V1::ColumnsController < ApplicationController
  before_action :set_board
  before_action :set_column, only: %i[show update destroy]

  def index
    render json: @board.columns
  end

  def show
    render json: @column
  end

  def create
    @column = @board.columns.new(column_params)
    respond_with_validations(success_status: :created) { @column.save }
  end

  def update
    respond_with_validations { @column.update(column_params) }
  end

  def destroy
    respond_with_validations { @column.destroy }
  end

  private

  def set_column
    @column = @board.columns.find(params[:id]) if @board
  end

  def set_board
    @board = Board.find(params[:board_id])
  end

  def column_params
    params.require(:column).permit(:title, :sequence)
  end
end
