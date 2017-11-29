FactoryBot.define do
  factory :task do
    title { Faker::Lorem.words.join(' ').titleize }
    description { Faker::Lorem.sentence(10) }
    column
  end
end
