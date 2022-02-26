class CreatePages < ActiveRecord::Migration[6.0]
  def change
    create_table :pages do |t|
      t.bigint :subject_i
      t.string :name
      t.string :permalink
      t.string :position
      t.boolean :visible
      t.text :content

      t.timestamps
    end
  end
end
