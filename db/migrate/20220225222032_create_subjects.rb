class CreateSubjects < ActiveRecord::Migration[6.0]
  def change
    create_table :subjects do |t|
      t.string :name
      t.string :position
      t.string :visible

      t.timestamps
    end
  end
end
