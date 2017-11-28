FactoryBot.define do
  factory :column do
    title { Faker::Color.color_name.capitalize }
    board
  end
end
