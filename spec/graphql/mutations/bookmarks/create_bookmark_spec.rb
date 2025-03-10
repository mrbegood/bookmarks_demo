require "rails_helper"

RSpec.describe "mutation createBookmark" do
  query = <<~GQL
    mutation($title: String!, $url: String!) {
      createBookmark(input: {title: $title, url: $url}) {
        id
        title
        url
      }
    }
  GQL

  it "create new bookmark" do
    title = "Google"
    url = "https://google.com"

    result = BookmarksDemoSchema.execute(query, variables: { title:, url: })
    bookmark = Bookmark.where(id: result.dig("data", "createBookmark", "id")).first

    expect(bookmark.title).to eq(title)
    expect(bookmark.url).to eq(url)
  end

  it "returns error when blank title provided" do
    title = ""
    url = "https://google.com"

    result = BookmarksDemoSchema.execute(query, variables: { title:, url: })

    expect(result.dig("errors", 0, "message")).to eq("Error creating bookmark")
    expect(result.dig("errors", 0, "extensions", "title")).to include("can't be blank")
  end

  it "returns error when blank url provided" do
    title = "Google"
    url = ""

    result = BookmarksDemoSchema.execute(query, variables: { title:, url: })

    expect(result.dig("errors", 0, "message")).to eq("Error creating bookmark")
    expect(result.dig("errors", 0, "extensions", "url")).to include("can't be blank")
  end


  it "returns error when invalid url provided" do
    title = "Google"
    url = "google.com"

    result = BookmarksDemoSchema.execute(query, variables: { title:, url: })

    expect(result.dig("errors", 0, "message")).to eq("Error creating bookmark")
    expect(result.dig("errors", 0, "extensions", "url")).to include("is not a valid URL")
  end
end
