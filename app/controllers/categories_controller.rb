class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update]

  def index
    @categories = Category.all
    # need something to order alphabetically
    render json: @categories.as_json(:only => [:id, :name]), status: 200
  end

  def show
    # add something here to show all expenses for the particular category selected
    render json: @category, status: 200
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      # need something here to order the categories alphabetically
      @categories = Category.all
      render json: @categories.as_json(:only => [:id, :name]), status: 201
    else
      render_errors_in_json
    end
  end

  def update
      if @category.update(category_params)
        render json: @category, status: 200
      else
        render_errors_in_json
      end
    end

    def destroy
      # don't really think they would ever delete a category
    end

    private

    def set_category
      @category = Category.find(params[:id])
      if !@category
        render json: { message: "Category not found"}, status: 404
      end
    end

    def render_errors_in_json
      render json: {
        errors: {
          messages: @category.errors.messages
        }
      }, status: 422
    end

    def category_params
      params.require(:category).permit(:name)
    end

  end
