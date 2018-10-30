class Expense < ApplicationRecord
  belongs_to :category
  validates :date, presence: true
  validates :amount, presence: true
  validates :description, presence: true
  validates :reimburse_percent, presence: true
  validates :category_id, presence: true

  def category_attributes=(category_attributes)
    if category_attributes['category_ids']
      category_attributes.category_ids.each do |id|
        category = Category.find(id: id)
        self.categories << category
      end
    end
    if category_attributes['name'] != ""
      category = Category.find_or_create_by(name: category_attributes['name'].downcase)
      self.categories << category
    end
  end

end
