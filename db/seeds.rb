require 'faker'
require 'factory_bot_rails'

boards = Board.create([{ title: 'My Awesome Project' },
                       { title: 'MyTime' }])

boards.each do |board|
  %w[Backlog In\ Progress Done].each do |title|
    column = Column.create(board: board,
                           title: title)
    FactoryBot.create_list(:task, rand(1..4), column: column)
  end
end
