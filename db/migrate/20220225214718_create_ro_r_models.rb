class CreateRoRModels < ActiveRecord::Migration[6.0]
  def change
    create_table :ro_r_models do |t|
      t.string :game
      t.string :name
      t.string :score
      t.string :add
      t.date :dob

      t.timestamps
    end
  end
end
