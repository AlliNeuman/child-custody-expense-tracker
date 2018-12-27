class AddColumnVotesToExpenses < ActiveRecord::Migration[5.2]
  def change
    add_column :expenses, :votes, :integer
  end
end
