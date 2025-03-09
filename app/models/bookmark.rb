class Bookmark < ApplicationRecord
  validates_presence_of :title, :url
  validates :url, url: true
end
