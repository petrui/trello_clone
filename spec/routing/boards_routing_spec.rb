require 'rails_helper'

RSpec.describe Api::V1::BoardsController, type: :routing do
  it { expect(get: '/api/v1/boards').to route_to('api/v1/boards#index') }
  it { expect(get: '/api/v1/boards/1').to route_to('api/v1/boards#show', id: '1') }
  it { expect(post: '/api/v1/boards').to route_to('api/v1/boards#create') }
  it { expect(put: '/api/v1/boards/1').to route_to('api/v1/boards#update', id: '1') }
  it { expect(delete: '/api/v1/boards/1').to route_to('api/v1/boards#destroy', id: '1') }

  # #new and #edit routes are not needed in the API
  it { expect(get: '/api/v1/boards/new').not_to route_to('api/v1/boards#new') }
  it { expect(get: '/api/v1/boards/new').to route_to('api/v1/boards#show', id: 'new') }
  it { expect(get: '/api/v1/boards/1/edit').not_to be_routable }
end
