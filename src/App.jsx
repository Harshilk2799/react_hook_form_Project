import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  // console.log(useForm());
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function handleFormSubmit(data) {
    // API call ko simulate krte h
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label htmlFor="firstname">FirstName </label>
          <input
            type="text"
            {...register("firstname", {
              required: true,
              minLength: { value: 3, message: "Min Length at least 3" },
              maxLength: { value: 6, message: "Max Length at most 6" },
            })}
            id="firstname"
          />
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>
        <br />
        <div>
          <label htmlFor="middlename">MiddleName </label>
          <input type="text" {...register("middlename")} id="middlename" />
        </div>
        <br />
        <div>
          <label htmlFor="lastname">LastName </label>
          <input type="text" {...register("lastname")} id="lastname" />
        </div>
        <br />
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting" : "Submit"}
        />
      </form>
    </>
  );
}

export default App;
