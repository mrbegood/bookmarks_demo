# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_bookmark, mutation: Mutations::Bookmarks::CreateBookmark
    field :delete_bookmark, mutation: Mutations::Bookmarks::DeleteBookmark
  end
end
