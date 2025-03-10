require "rails_helper"

RSpec.describe "mutation deleteBookmark" do
  query = <<~GQL
    mutation($id: ID!) {
      deleteBookmark(input: {id: $id}) {
        id
      }
    }
  GQL

  it "delete bookmark with specified id" do
    @bookmark = Bookmark.create!(title: "Google", url: "https://google.com")

    BookmarksDemoSchema.execute(query, variables: { id: @bookmark.id })

    expect(Bookmark.exists?(@bookmark.id)).to be_falsey
  end

  it "returns error when invalid id provided" do
    result = BookmarksDemoSchema.execute(query, variables: { id: "invalid" })

    expect(result.dig("errors", 0, "message")).to eq("Couldn't find Bookmark with 'id'=invalid")
  end
end
