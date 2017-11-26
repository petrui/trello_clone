class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActionController::ParameterMissing, with: :missing_param_error

  protected

  def not_found(exception)
    render json: { errors: [exception.message] }, status: :not_found
  end

  def missing_param_error(exception)
    render json: { errors: [exception.message] }, status: :unprocessable_entity
  end

  def respond_with_validations(options = {})
    instance_var = instance_variable_get "@#{controller_name.singularize}"

    if yield
      render json: instance_var, status: options.fetch(:success_status, :ok)
    else
      render json: { errors: instance_var.errors.full_messages },
             status: options.fetch(:error_status, :unprocessable_entity)
    end
  end
end
