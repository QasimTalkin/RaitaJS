class FixCol < ActiveRecord::Migration[6.0]
  def change
    rename_column :reviews, :socre, :score
  end
end
