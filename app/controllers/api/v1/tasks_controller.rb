class Api::V1::TasksController < ApplicationController
  before_action :set_column
  before_action :set_task, only: %i[show update destroy]

  def index
    render json: @column.tasks
  end

  def show
    render json: @task
  end

  def create
    @task = @column.tasks.new(task_params)
    respond_with_validations(success_status: :created) { @task.save }
  end

  def update
    respond_with_validations { @task.update(task_params) }
  end

  def destroy
    respond_with_validations { @task.destroy }
  end

  private

  def set_task
    @task = @column.tasks.find(params[:id]) if @column
  end

  def set_column
    @column = Column.find_by!(
      id: params[:column_id],
      board_id: params[:board_id]
    )
  end

  def task_params
    params.require(:task).permit(:title, :description, :sequence_position)
  end
end
