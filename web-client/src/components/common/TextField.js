import textfield from "../../assets/css/common/textfield.module.css";

export const TextField = ({ label_name, text_value }) => {
  return (
    <div className={textfield.container}>
      <label htmlFor="name">{label_name}</label>
      <input
        className={textfield.input}
        disabled
        name="name"
        type="text"
        value={text_value}
      />
    </div>
  );
};
