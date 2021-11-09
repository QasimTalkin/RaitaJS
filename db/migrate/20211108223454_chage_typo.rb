class ChageTypo < ActiveRecord::Migration[6.0]
  def change
    rename_column :adobes, :type, :httpmethod
  end
end
