module Resolvers
  class BookmarksResolver < BaseResolver
    type [ Types::BookmarkType ], null: true

    def resolve
      Bookmark.all
    end
  end
end
