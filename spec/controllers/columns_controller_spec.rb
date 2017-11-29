require 'rails_helper'

RSpec.describe Api::V1::ColumnsController, type: :controller do
  it_behaves_like 'an api controller' do
    let!(:item) { create(:column) }
    let(:params) { item.slice(:board_id, :id) }
    let(:serialized_item) { item.slice(:id, :title).symbolize_keys }
    let(:valid_attributes) { { board_id: item.board_id, column: { title: 'New Title' } } }
    let(:invalid_attributes) { { board_id: item.board_id, column: { title: nil } } }
  end
end
