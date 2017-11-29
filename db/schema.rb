# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171128001300) do

  create_table "boards", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_boards_on_title", unique: true
  end

  create_table "columns", force: :cascade do |t|
    t.string "title"
    t.integer "sequence"
    t.integer "board_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id", "title"], name: "index_columns_on_board_id_and_title", unique: true
    t.index ["board_id"], name: "index_columns_on_board_id"
    t.index ["sequence"], name: "index_columns_on_sequence"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "sequence"
    t.integer "column_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["column_id"], name: "index_tasks_on_column_id"
    t.index ["sequence"], name: "index_tasks_on_sequence"
  end

end
