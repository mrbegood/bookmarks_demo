import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import ModalComponent from "../ui/modal/modal.component";
import InputComponent from "../ui/input/input.component";
import { GET_BOOKMARKS, ADD_BOOKMARK } from "../../grapql/requests";

const defaultFormFields = {
  title: "",
  url: "",
};

export default function CreateBookmarkForm({ visible, handleClose }) {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errors, setErrors] = useState({});
  const { title, url } = formFields;

  const [mutateFunc] = useMutation(ADD_BOOKMARK, {
    refetchQueries: [GET_BOOKMARKS],
  });

  const closeForm = () => {
    setFormFields(defaultFormFields);
    setErrors({});
    handleClose();
  };

  const validateErrors = () => {
    if (!title) {
      setErrors({ title: "Can't be blank" });
      return false;
    }

    if (!url) {
      setErrors({ url: "Can't be blank" });
      return false;
    } else {
      try {
        new URL(url);
      } catch {
        setErrors({ url: "Invalid url address" });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateErrors()) {
      return;
    }

    mutateFunc({
      variables: { title, url },
      optimisticResponse: {
        createBookmark: {
          id: "temp-id",
          __typename: "Bookmark",
          title,
          url,
        },
      },
    });

    closeForm();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    setErrors({})
  };

  return (
    <ModalComponent title="New bookmark" visible={visible} onClose={closeForm}>
      <form className="w-96" onSubmit={handleSubmit}>
        <InputComponent
          title="Title"
          type="text"
          name="title"
          value={title}
          error={errors.title}
          handleChange={handleChange}
          placeholder="Title"
        />
        <InputComponent
          title="URL"
          type="url"
          name="url"
          value={url}
          error={errors.url}
          handleChange={handleChange}
          placeholder="https://example.com"
        />
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </ModalComponent>
  );
}
