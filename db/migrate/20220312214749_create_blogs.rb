class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.string :comment
      t.string :title
      t.string :subject
      t.string :reviews

      t.timestamps
    end
  end
end
