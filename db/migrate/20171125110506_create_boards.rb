class CreateBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.string :title

      t.timestamps
    end

    add_index :boards, :title, unique: true
  end
end
