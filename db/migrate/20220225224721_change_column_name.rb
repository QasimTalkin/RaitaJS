class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :subjects, :postion, :position
  end
end
