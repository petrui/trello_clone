class Board < ApplicationRecord
  has_many :columns, dependent: :destroy

  validates_presence_of :title
  validates_uniqueness_of :title
end
