class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :date, :amount, :description, :reimburse_percent, :paid, :category_id

  belongs_to :category
end
