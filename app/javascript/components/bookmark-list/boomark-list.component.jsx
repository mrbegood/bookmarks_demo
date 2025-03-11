import React from "react";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useQuery, useMutation } from "@apollo/client";
import { GET_BOOKMARKS, DELETE_BOOKMARK } from "../../grapql/requests";

export default function BookmarkList() {
  const { loading, error, data } = useQuery(GET_BOOKMARKS);

  const [deleteBookmark] = useMutation(DELETE_BOOKMARK, {
    update(cache, { data: { deleteBookmark } }) {
      const data = { ...cache.readQuery({ query: GET_BOOKMARKS }) };
      const bookmarks = data.bookmarks.filter((bookmark) => {
        bookmark.id !== deleteBookmark.id;
      });

      cache.writeQuery({
        query: GET_BOOKMARKS,
        data: { ...data, bookmarks },
      });
    },
    refetchQueries: ["GetBookmarks"],
  });

  const handleDeleteBookmark = (id) => {
    deleteBookmark({ variables: { id } });
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data.bookmarks.length === 0)
    return <div className="w-full p-4 text-center">No bookmarks found.</div>;

  return (
    <div className="w-full flex flex-col gap-1 justify-between">
      {data.bookmarks.map((bookmark) => (
        <div
          key={bookmark.id}
          className="flex flex-row px-4 py-3 hover:bg-gray-50 rounded-md"
        >
          <div className="flex-grow">
            <Link
              to={bookmark.url}
              target="_blank"
              className="hover:underline text-blue-500"
            >
              {bookmark.title}
            </Link>
          </div>
          <div className="flex gap-1">
            <Link onClick={() => handleDeleteBookmark(bookmark.id)}>
              <TrashIcon
                className="w-5 h-5 text-red-400"
                title="Delete Bookmark"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
