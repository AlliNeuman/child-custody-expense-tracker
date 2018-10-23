class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.date :date
      t.float :amount
      t.text :description
      t.float :reimburse_percent
      t.boolean :paid, default: false
      t.integer :category_id

      t.timestamps
    end
  end
end
