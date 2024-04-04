import type { Dispatch, SetStateAction } from "react";
import type { FormType } from "../AuthForm";

export type LoginFormProps = {
  setFormType: Dispatch<SetStateAction<FormType>>;
};
