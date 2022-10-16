import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

const getButton1 = (buttonType=BUTTON_TYPE_CLASSES.base) => {
    switch (buttonType) {
      case BUTTON_TYPE_CLASSES.base: {
        return BaseButton;
      }
      case BUTTON_TYPE_CLASSES.google: {
        return GoogleSignInButton;
      }
      case BUTTON_TYPE_CLASSES.inverted: {
        return InvertedButton;
      }    
      default:
        return null;
    }

}
export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

// const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
//   ({
//     [BUTTON_TYPE_CLASSES.base]: BaseButton,
//     [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
//     [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
//   }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton1(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;