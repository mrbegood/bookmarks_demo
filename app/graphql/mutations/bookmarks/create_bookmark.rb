# frozen_string_literal: true

module Mutations
  module Bookmarks
    class CreateBookmark < BaseMutation
      description "Creates a new bookmark"

      argument :title, String, required: true
      argument :url, String, required: true

      type Types::BookmarkType

      def resolve(**attributes)
        bookmark = ::Bookmark.new(attributes)
        raise GraphQL::ExecutionError.new "Error creating bookmark", extensions: bookmark.errors.to_hash unless bookmark.save

        bookmark
      end
    end
  end
end
