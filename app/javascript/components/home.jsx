import React from "react";
import { Link } from "react-router-dom";

import {
  TrashIcon,
  ClipboardDocumentIcon,
  PencilSquareIcon
} from "@heroicons/react/24/outline";

export default () => (
  <div class="mx-auto max-w-3xl">
    <div class="flex gap-4 p-4 mb-1 bg-gray-50 border-b-1 border-gray-100">
      <input
        type="text"
        name="title"
        placeholder="Title"
        class="bg-white p-2 rounded-md border-gray-200 border-1 text-xs w-40"
      />
      <input
        type="text"
        name="url"
        placeholder="URL"
        class="bg-white p-2 rounded-md border-gray-200 border-1 text-xs flex-grow"
      />
      <button
        type="submit"
        class="bg-blue-600 text-white rounded-md text-xs p-2"
      >
        Add Bookmark
      </button>
    </div>
    <table class="w-full">
      <tbody>
        <tr class="flex hover:bg-gray-50">
          <td class="px-2 py-1 flex-grow">
            <Link className="hover:underline text-blue-500" to="https://google.com" target="_blank">
              Indiana
            </Link>
          </td>
          <td class="px-2 py-1 flex gap-1">
            <Link to="#">
              <ClipboardDocumentIcon
                className="w-5 h-5 text-red-400"
                title="Copy Link"
              />
            </Link>
            <Link to="#">
              <PencilSquareIcon
                className="w-5 h-5 text-red-400"
                title="Edit Bookmark"
              />
            </Link>
            <Link to="#">
              <TrashIcon
                className="w-5 h-5 text-red-400"
                title="Delete Bookmark"
              />
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
