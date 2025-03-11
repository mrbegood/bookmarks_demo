import React, { useState } from "react";
import CreateBookmarkForm from "../components/create-bookmark-form/create-bookmark-form.component";
import BookmarkList from "../components/bookmark-list/boomark-list.component";

export default () => {
  const [showNewDialog, showNewBookmarkDialog] = useState(false);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="w-full border-b-1 border-gray-200 text-right p-4 mb-4">
        <button
          onClick={() => showNewBookmarkDialog(true)}
          type="button"
          className="btn btn-primary"
        >
          New Bookmark
        </button>
      </div>
      <CreateBookmarkForm
        visible={showNewDialog}
        handleClose={() => showNewBookmarkDialog(false)}
      />
      <BookmarkList />
    </div>
  );
};
