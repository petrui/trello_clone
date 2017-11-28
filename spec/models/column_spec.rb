require 'rails_helper'

RSpec.describe Column, type: :model do
  subject { build(:column) }

  describe 'db structure' do
    it { is_expected.to have_db_column(:title).of_type(:string) }
    it { is_expected.to have_db_column(:sequence).of_type(:integer) }
    it { is_expected.to have_db_column(:created_at).of_type(:datetime) }
    it { is_expected.to have_db_column(:updated_at).of_type(:datetime) }

    it { is_expected.to have_db_index(:sequence) }
    it { is_expected.to have_db_index(%i[board_id title]).unique(true) }
  end

  describe 'associations' do
    it { is_expected.to belong_to(:board) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_uniqueness_of(:title).scoped_to(:board_id) }
    it { is_expected.to be_valid }
  end
end
