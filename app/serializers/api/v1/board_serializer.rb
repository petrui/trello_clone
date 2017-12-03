class Api::V1::BoardSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :columns
end
