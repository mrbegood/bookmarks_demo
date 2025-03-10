# frozen_string_literal: true

module Mutations
  module Bookmarks
    class DeleteBookmark < BaseMutation
      description "Deletes a bookmark by ID"

      argument :id, ID, required: true

      type Types::BookmarkType

      def resolve(id:)
        bookmark = ::Bookmark.find(id)
        raise GraphQL::ExecutionError.new "Error deleting bookmark", extensions: bookmark.errors.to_hash unless bookmark.destroy!

        bookmark
      rescue ActiveRecord::RecordNotFound
        raise GraphQL::ExecutionError.new "Couldn't find Bookmark with 'id'=#{id}"
      end
    end
  end
end
