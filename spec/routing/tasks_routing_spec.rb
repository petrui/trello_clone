require 'rails_helper'

RSpec.describe Api::V1::TasksController, type: :routing do
  it do
    expect(get: '/api/v1/boards/1/columns/2/tasks')
      .to route_to('api/v1/tasks#index', board_id: '1', column_id: '2')
  end

  it do
    expect(get: '/api/v1/boards/1/columns/2/tasks/3')
      .to route_to('api/v1/tasks#show', board_id: '1', column_id: '2', id: '3')
  end

  it do
    expect(post: '/api/v1/boards/1/columns/2/tasks')
      .to route_to('api/v1/tasks#create', board_id: '1', column_id: '2')
  end

  it do
    expect(put: '/api/v1/boards/1/columns/2/tasks/3')
      .to route_to('api/v1/tasks#update', board_id: '1', column_id: '2', id: '3')
  end

  it do
    expect(delete: '/api/v1/boards/1/columns/2/tasks/3')
      .to route_to('api/v1/tasks#destroy', board_id: '1', column_id: '2', id: '3')
  end

  # #new and #edit routes are not needed in the API
  it do
    expect(get: '/api/v1/boards/1/columns/2/tasks/new')
      .not_to route_to('api/v1/tasks#new')
  end

  it { expect(get: '/api/v1/boards/1/columns/2/tasks/3/edit').not_to be_routable }
end
