class ExpensesController < ApplicationController
  before_action :set_expense, only: [:show, :update, :destroy]

  def index
    @expenses = Expense.all
    # need something to order by date desc
    render json: @expenses.as_json(:except => [:created_at, :updated_at])
  end

  def show
    # need render json stuff here
    render json: @expense, status: 200
  end

  def create
    @expense = Expense.new(expense_params)
    if @expense.save
      # need something here to order by date
      render json: @expense.as_json(:except => [:created_at, :updated_at]), status: 201
    else
      render_errors_in_json
    end
  end

  def update
    if @expense.update(expense_params)
      render json: @expense
    else
      render_errors_in_json
    end
  end

  def destroy
    @expense.destroy
    :no_content
  end

  private

  def set_expense
    @expense = Expense.find(params[:id])
    if !@expense
      render json: { message: "Expense not found"}, status: 404
    end
  end

  def render_errors_in_json
    render json: {
      errors: {
        messages: @expense.errors.messages
      }
    }, status: 422
  end

  def expense_params
    params.require(:expense).permit(:date, :amount, :description, :reimburse_percent, :paid, :category_id, category_attributes: [:id, :name]
    )
  end
  
end
