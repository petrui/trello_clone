require 'faker'
require 'factory_bot_rails'

boards = Board.create([{ title: Faker::Beer.unique.name },
                       { title: Faker::Beer.unique.name }])

boards.each do |board|
  4.times do
    column = Column.create(board: board,
                           title: Faker::Color.unique.color_name.capitalize)
    FactoryBot.create_list(:task, rand(4..7), column: column)
  end
end
