require 'rails_helper'

RSpec.describe Api::V1::TasksController, type: :controller do
  it_behaves_like 'an api controller' do
    let!(:item) { create(:task) }
    let(:params) { item.slice(:column_id, :id).merge(item.column.slice(:board_id)) }
    let(:serialized_item) { item.slice(:id, :title, :description).symbolize_keys }

    let(:valid_attributes) do
      { board_id: item.column.board_id,
        column_id: item.column_id,
        task: { title: 'New Title', description: 'Desc' } }
    end

    let(:invalid_attributes) do
      { board_id: item.column.board_id,
        column_id: item.column_id,
        task: { title: nil } }
    end
  end
end
