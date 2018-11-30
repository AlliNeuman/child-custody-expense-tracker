class Expense < ApplicationRecord
  belongs_to :category
  # validates :date, presence: true
  validates :amount, presence: true
  validates :description, presence: true
  validates :reimburse_percent, presence: true

  def category_attributes=(category_attributes)
    binding.pry
    if category_attributes['category_ids']

      category_attributes.category_ids.each do |id|
        category = Category.find(id: id)

        self.category << category
        self.save
      end
    end
    if category_attributes['name'] != ""
      category = Category.find_or_create_by(name: category_attributes['name'].downcase)
      self.category << category
      self.save

    end
  end

end
