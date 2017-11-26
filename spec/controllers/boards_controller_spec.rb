require 'rails_helper'

RSpec.shared_examples 'a 404 response' do |opts = {}|
  let(:extra_params) { {} }

  context 'when the item does not exist' do
    let(:params) { { id: 0 }.merge(extra_params) }
    before { send(opts[:method], opts[:action], params: params) }

    it 'returns status code 404' do
      expect(response).to have_http_status(404)
    end

    it 'returns a not found message' do
      expect(json_response[:errors].first).to match(/Couldn't find/)
    end
  end
end

RSpec.describe Api::V1::BoardsController, type: :controller do
  let!(:board) { create(:board) }
  let(:serialized_board) { board.slice(:id, :title).symbolize_keys }
  let(:valid_attributes) { { board: { title: 'New Title' } } }
  let(:invalid_attributes) { { board: { title: nil } } }

  describe 'GET #index' do
    before { get :index }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns boards' do
      expect(json_response.size).to eq(1)
      expect(json_response).to eq([serialized_board])
    end
  end

  describe 'GET #show' do
    context 'when the board exists' do
      before { get :show, params: { id: board.id } }

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns the board' do
        expect(json_response).to eq(serialized_board)
      end
    end
    it_behaves_like 'a 404 response', method: :get, action: :show
  end

  describe 'POST #create' do
    context 'with valid params' do
      before { post :create, params: valid_attributes }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end

      it 'returns the item' do
        expect(json_response[:title]).to eq('New Title')
      end
    end

    context 'with invalid params' do
      before { post :create, params: invalid_attributes }
      it 'returns unprocessable_entity status' do
        expect(response.status).to eq(422)
      end

      it 'returns a failure message' do
        expect(json_response[:errors].first).to match(/can't be blank/)
      end
    end
  end

  describe 'PUT #update' do
    context 'with valid params' do
      before { put :update, params: { id: board.id, board: { title: 'zzz' } } }
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'updates the item' do
        board.reload
        expect(board.title).to match('zzz')
      end
    end
    it_behaves_like 'a 404 response', method: :put, action: :update
  end

  describe 'DELETE #destroy' do
    context 'with valid params' do
      before { delete :destroy, params: { id: board.id } }

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'removes the item' do
        expect { board.reload }.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
    it_behaves_like 'a 404 response', method: :delete, action: :destroy
  end
end
