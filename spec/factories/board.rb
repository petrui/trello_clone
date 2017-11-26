FactoryBot.define do
  factory :board do
    title Faker::Beer.unique.name
  end
end
