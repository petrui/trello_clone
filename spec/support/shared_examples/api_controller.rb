require 'rails_helper'

RSpec.shared_examples 'a 404 response' do |opts = {}|
  context 'when the item does not exist' do
    before { send(opts[:method], opts[:action], params: params_404) }

    it 'returns status code 404' do
      expect(response).to have_http_status(404)
    end

    it 'returns a not found message' do
      expect(json_response[:errors].first).to match(/Couldn't find/)
    end
  end
end

RSpec.shared_examples 'an api controller' do
  describe 'GET #index' do
    before { get :index, params: params.except(:id) }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns boards' do
      expect(json_response.size).to eq(1)
      expect(json_response).to eq([serialized_item])
    end
  end

  describe 'GET #show' do
    context 'when the item exists' do
      before { get :show, params: params }

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns the item' do
        expect(json_response).to eq(serialized_item)
      end
    end
    it_behaves_like 'a 404 response', method: :get, action: :show do
      let(:params_404) { params.merge(id: 0) }
    end
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
      before { put :update, params: params.merge(valid_attributes) }
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'updates the item' do
        new_value = valid_attributes.values.last.values[0]
        item.reload
        expect(item.title).to match(new_value)
      end
    end
    it_behaves_like 'a 404 response', method: :put, action: :update do
      let(:params_404) { params.merge(id: 0) }
    end
  end

  describe 'DELETE #destroy' do
    context 'with valid params' do
      before { delete :destroy, params: params }

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'removes the item' do
        expect { item.reload }.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
    it_behaves_like 'a 404 response', method: :delete, action: :destroy do
      let(:params_404) { params.merge(id: 0) }
    end
  end
end
