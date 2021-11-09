class CreateAdobe < ActiveRecord::Migration[6.0]
  def change
    create_table :adobes do |t|
      t.string :req
      t.string :resp
      t.string :type
    end
  end
end
