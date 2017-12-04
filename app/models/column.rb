class Column < ApplicationRecord
  include RankedModel
  belongs_to :board
  has_many :tasks, dependent: :destroy

  validates_presence_of :title
  validates_uniqueness_of :title, scope: :board_id

  ranks :sequence, with_same: :board_id
  default_scope { rank(:sequence) }
end
