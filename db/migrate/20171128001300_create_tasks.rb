class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.integer :sequence
      t.belongs_to :column

      t.timestamps
    end

    add_index :tasks, :sequence
  end
end
