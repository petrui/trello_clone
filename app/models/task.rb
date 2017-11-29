class Task < ApplicationRecord
  include RankedModel
  belongs_to :column

  validates_presence_of :title, :description

  ranks :sequence
end
