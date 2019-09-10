import React from "react";
import { observer } from "mobx-react";
import { FormControl, FormHelperText } from "@material-ui/core";
import FileUploadForm from "./FileUploadForm";

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.form = FileUploadForm;
    this.fileField = this.form.$("filefield");
  }

  fileSubmit = () => {
    this.form.validate({ showErrors: true }).then(async ({ isValid }) => {
      console.log("isValid", isValid);
      if (isValid) {
        console.log("form data", this.form.values());
        const data = this.form.values();
        console.log("test", this.form.$("filefield").files);
      }
    });
  };

  changeFile = e => {
    console.log(e.target.value, e.target.files[0]);
    this.fileField.set(e.target.value);
    console.log("test", this.form.$("filefield").files);
  };

  render() {
    // console.log("FileUpload", this.props, this.form.values(), this.fileField);
    return (
      <div>
        <span>Test FileUpload</span>
        <div>Div</div>
        <FormControl error={this.fileField.hasError}>
          <input {...this.fileField.bind()} onChange={this.changeFile} />
          <FormHelperText>{this.fileField.error}</FormHelperText>
        </FormControl>
        <h1 onClick={this.fileSubmit}>Click</h1>
      </div>
    );
  }
}

export default observer(FileUpload);
