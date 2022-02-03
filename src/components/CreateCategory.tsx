import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { customCategoryState } from "../atoms";

interface IForm {
  customCategory: string;
}

function CreateCategory() {
  const setCustomCategories = useSetRecoilState(customCategoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ customCategory }: IForm) => {
    setCustomCategories((oldCategories) => [
      { title: customCategory, id: Date.now() },
      ...oldCategories,
    ]);
    setValue("customCategory", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("customCategory", {
          required: "Please write a Category",
        })}
        placeholder="Write a Category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
