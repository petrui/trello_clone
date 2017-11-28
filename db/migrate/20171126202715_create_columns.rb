class CreateColumns < ActiveRecord::Migration[5.1]
  def change
    create_table :columns do |t|
      t.string :title
      t.integer :sequence
      t.belongs_to :board

      t.timestamps
    end

    add_index :columns, :sequence
    add_index :columns, %i[board_id title], unique: true
  end
end
