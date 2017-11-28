require 'rails_helper'

RSpec.describe Api::V1::ColumnsController, type: :routing do
  it { expect(get: '/api/v1/boards/1/columns').to route_to('api/v1/columns#index', board_id: '1') }
  it { expect(get: '/api/v1/boards/1/columns/1').to route_to('api/v1/columns#show', board_id: '1', id: '1') }
  it { expect(post: '/api/v1/boards/1/columns').to route_to('api/v1/columns#create', board_id: '1') }
  it { expect(put: '/api/v1/boards/1/columns/1').to route_to('api/v1/columns#update', board_id: '1', id: '1') }
  it { expect(delete: '/api/v1/boards/1/columns/1').to route_to('api/v1/columns#destroy', board_id: '1', id: '1') }

  # #new and #edit routes are not needed in the API
  it { expect(get: '/api/v1/boards/1/columns/new').not_to route_to('api/v1/columns#new') }
  it { expect(get: '/api/v1/boards/1/columns/1/edit').not_to be_routable }
end
