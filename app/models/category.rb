class Category < ApplicationRecord
  has_many :expenses
  validates :name, presence: true
  before_save :downcase_fields

  def downcase_fields
    self.name.downcase!
  end
end
