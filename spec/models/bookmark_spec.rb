require 'rails_helper'

RSpec.describe Bookmark, type: :model do
  subject { described_class.new(title: "Google", url: "https://google.com") }

  it { is_expected.to validate_presence_of(:title) }
  it { is_expected.to validate_presence_of(:url) }

  it "validates url format is correct" do
    expect(subject).to be_valid

    subject.url = "google.com"
    expect(subject).to be_invalid
  end
end
