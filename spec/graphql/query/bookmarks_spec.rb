require "rails_helper"

RSpec.describe "query bookmarks" do
  query = <<~GQL
    query {
      bookmarks {
        id
        title
        url
      }
    }
  GQL

  before {
    @bookmarks = [
      Bookmark.create!(title: "Google", url: "https://google.com"),
      Bookmark.create!(title: "Github", url: "https://github.com"),
      Bookmark.create!(title: "Reddit", url: "https://reddit.com")
    ]
  }

  it "returns all bookmarks" do
    result = BookmarksDemoSchema.execute(query)

    expect(result.dig("data", "bookmarks")).to match_array(
      @bookmarks.map do |bookmark|
        {
          "id" => bookmark.id.to_s,
          "title" => bookmark.title,
          "url" => bookmark.url
        }
      end
    )
  end
end
