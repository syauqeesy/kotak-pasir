import { FormEvent } from "react";
import { Link, Navigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useForm from "../../hook/use-form";
import { createArticle } from "../../api/article";
import Input from "../../component/Input";

function Create() {
  const [title, onChangeTitleHandler] = useForm();
  const [body, onChangeBodyHandler] = useForm();

  const queryClient = useQueryClient();

  const {
    mutate,
    status,
    data: result,
  } = useMutation({
    mutationFn: createArticle,
    onSuccess: (result) => {
      queryClient.setQueryData(["articles", result.data.id], result);
      queryClient.invalidateQueries(["articles"], { exact: true });
    },
  });

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    mutate({
      title,
      body,
    });
  }

  if (status == "success")
    return <Navigate to={`/article/${result.data.id}`} />;

  return (
    <div className="create px-10 py-5">
      <div className="flex justify-start">
        <Link className="d-block text-blue-500 underline" to="/">
          back
        </Link>
      </div>
      <h1 className="text-3xl font-bold mt-6 mb-4">Create</h1>

      <form method="post" className="w-1/4" onSubmit={onSubmitHandler}>
        <Input
          name="title"
          label="Title"
          value={title}
          handleOnChange={onChangeTitleHandler}
        ></Input>
        <Input
          name="body"
          label="Body"
          value={body}
          handleOnChange={onChangeBodyHandler}
        ></Input>
        <button
          type="submit"
          className="d-block border-solid border-2 px-2 py-1 text-slate-500"
          disabled={status == "loading" ? true : false}
        >
          {status == "loading" ? "Loading.." : "Create Article"}
        </button>
      </form>
    </div>
  );
}

export default Create;
