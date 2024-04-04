import type { Dispatch, SetStateAction } from "react";
import type { FormType } from "../AuthForm";

export type SignUpFormProps = {
  setFormType: Dispatch<SetStateAction<FormType>>;
};
