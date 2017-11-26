require 'rails_helper'

RSpec.describe Board, type: :model do
  subject { build(:board) }

  describe 'db structure' do
    it { is_expected.to have_db_column(:title).of_type(:string) }
    it { is_expected.to have_db_column(:created_at).of_type(:datetime) }
    it { is_expected.to have_db_column(:updated_at).of_type(:datetime) }

    it { is_expected.to have_db_index(:title).unique(true) }
  end

  # describe 'associations' do
  #   it { is_expected.to have_many(:columns).dependent(:destroy) }
  # end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_uniqueness_of(:title) }
    it { is_expected.to be_valid }
  end
end
