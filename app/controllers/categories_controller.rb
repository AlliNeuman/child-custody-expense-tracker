class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update]

  def index
    @categories = Category.all
    # need something to order alphabetically
    render json: @categories
  end

  def show
    # add something here to show all expenses for the particular category selected
    render json: @category
  end

  def create
    @category = Category.new(category_params)
    if @category.valid?
      @category.save
      @categories = Category.order(name: :desc)
      render json: @categories
    else
      render json: { message: "Something went wrong in creating the new category. Please try submitting again."}
  end

  def update
    if @category.valid?
      @category.update(category_params)
      render json: @category
    else
      render json: { message: "The category could not be edited. Please try again."}
    end
  end

  def destroy
    # don't really think they would ever delete a category
  end

  private

  def set_category
    @category = Category.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:name)
  end

end
