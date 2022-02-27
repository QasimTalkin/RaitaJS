class CreateDepartments < ActiveRecord::Migration[6.0]
  def change
    create_table :departments do |t|
      t.string :name
      t.bigint :deptNum

      t.timestamps
    end
  end
end
