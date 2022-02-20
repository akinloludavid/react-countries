import React from "react";
import Select from "react-select";
export type OptionType = {
  value: string;
  label: string;
};
type SelectProps = {
  onChange: any;
  placeholder?: string;
  name?: string;
  options?: Array<OptionType>;
  value?: any;
  fullWidth?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  [x: string]: any;
  isClearable?: boolean;
};
const CustomSelect = ({
  options = [],
  onChange,
  isClearable = true,
  placeholder = "Select an Option",
  name,
  isLoading,
  fullWidth = false,
  isDisabled,
  value,
  ...rest
}: SelectProps) => {
  return (
    <Select
      {...rest}
      options={options}
      value={value}
      className={`select-item ${fullWidth ? "full-width" : ""}`}
      classNamePrefix="react-select"
      isSearchable={true}
      isClearable={isClearable}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      components={{
        IndicatorSeparator: () => null,
      }}
      isDisabled={isDisabled}
      isLoading={isLoading}
      theme={(theme) => ({
        ...theme,

        colors: {
          ...theme.colors,
          primary25: "hsl(209, 23%, 22%)",
          primary: "#030303",
          primary50: "#050505",
        },
      })}
    />
  );
};

export default CustomSelect;
