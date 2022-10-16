import { ShrinkLabel, FormInputLabel, FormInputContainer, Group } from "./form-input.styles";

const FormInput = ({label,...otherProps}) => {
  return (
    <Group>
      <FormInputContainer {...otherProps} />
      {label && (
        <FormInputLabel >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;