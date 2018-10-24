class Expense < ApplicationRecord
  belongs_to :category
  validates :date, presence: true
  validates :amount, presence: true
  validates :description, presence: true
  validates :reimburse_percent, presence: true
  validates :category_id, presence: true 
end
