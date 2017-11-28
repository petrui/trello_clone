require 'rails_helper'

RSpec.describe Api::V1::BoardsController, type: :controller do
  it_behaves_like 'an api controller' do
    let!(:item) { create(:board) }
    let(:params) { item.slice(:id) }
    let(:serialized_item) { item.slice(:id, :title).symbolize_keys }
    let(:valid_attributes) { { board: { title: 'New Title' } } }
    let(:invalid_attributes) { { board: { title: nil } } }
  end
end
