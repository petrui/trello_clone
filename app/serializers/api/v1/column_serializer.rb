class Api::V1::ColumnSerializer < ActiveModel::Serializer
  attributes :id, :title, :board_id
  belongs_to :board
  has_many :tasks, serializer: Api::V1::TaskSerializer
end
