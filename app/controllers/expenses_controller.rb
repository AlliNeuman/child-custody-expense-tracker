class ExpensesController < ApplicationController
  before_action :set_expense, only: [:show, :update, :destroy]

  def index
    @expenses = Expense.all
    # need something to order by date desc
    render json: @expenses
  end

  def show
    # need render json stuff here
    render json: @expense
  end

  def create
    @expense = Expense.new(expense_params)
    if @expense.valid?
      @expense.save
      @expenses = Expense.order(date: :desc)
      render json: @expenses
    else
      render json: { message: "Something went wrong creating your new record. Please try again."}
    end
  end

  def update
    if @expense.valid?
      @expense.update(expense_params)
      render json: @expense
    else
      render json: { message: "The category could not be edited. Please try again."}
    end
  end

  def destroy

  end

  private

  def set_expense
    @expense = Expense.find(params[:id])
  end

  def expense_params
    params.require(:expense).permit(:date, :amount, :description, :reimburse_percent, :paid, :category_id)
  end
end
