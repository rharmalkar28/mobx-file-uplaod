import { Form } from "mobx-react-form";
import validatorjs from "validatorjs";

const fields = ["filefield"];

const labels = {
  filefield: "Upload File"
};
const rules = {
  filefield: "required"
};
// const rules = {
//   filefield: {
//     function: value => {
//       return false;
//       // return [!!value.files && value.files.length > 0, "Required"];
//     },
//     message: "The :attribute is required."
//   }
// };

const initials = {
  filefield: ""
};

const options = {
  validateOnInit: false,
  validateOnChange: true
  // "filefield": {
  //   validateOnChange: true
  // }
};

const values = {
  filefield: ""
};

const types = {
  filefield: "file"
};

// const validators = {
//   "filefield": ({ field }) => {
//     return [!!field.files && field.files.length > 0, "Required"];
//   }
// };

const plugins = {
  dvr: {
    package: validatorjs
  }
};

export default new Form(
  { fields, labels, rules, types, initials, values },
  { plugins, options }
);
