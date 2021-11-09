class CreateAdobes < ActiveRecord::Migration[6.0]
  def change
    create_table :adobes do |t|
      t.string :name
      t.string :type
      t.string :resp
      t.string :req

      t.timestamps
    end
  end
end
