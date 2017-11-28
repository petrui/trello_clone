FactoryBot.define do
  factory :board do
    title { Faker::Beer.name }
  end
end
