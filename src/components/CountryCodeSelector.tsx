import type React from "react";
import type { SingleValue } from "react-select";
import Select from "react-select";

interface CountryCode {
  code: string;
  name: string;
  dialCode: string;
}

const countryCodes: CountryCode[] = [
  { code: "CO", name: "Colombia", dialCode: "+57" },
  { code: "MX", name: "México", dialCode: "+52" },
  { code: "ES", name: "España", dialCode: "+34" },
  { code: "AR", name: "Argentina", dialCode: "+54" },
  { code: "PE", name: "Perú", dialCode: "+51" },
  { code: "CL", name: "Chile", dialCode: "+56" },
  { code: "US", name: "Estados Unidos", dialCode: "+1" },
  { code: "CA", name: "Canadá", dialCode: "+1" },
  { code: "BR", name: "Brasil", dialCode: "+55" },
];

interface CountryCodeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const options = countryCodes.map((country) => ({
  value: country.dialCode,
  code: country.code,
}));

export const CountryCodeSelector: React.FC<CountryCodeSelectorProps> = ({
  value,
  onChange,
}) => {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <Select
      classNamePrefix="country-select"
      options={options}
      value={selectedOption}
      onChange={(option: SingleValue<(typeof options)[0]>) => {
        if (option) onChange(option.value);
      }}
      isSearchable={false}
      styles={{
        control: (provided, state) => ({
          ...provided,
          minWidth: 130,
          maxWidth: 130,
          borderRadius: "0.375rem",
          paddingLeft: "0.5rem",
          paddingRight: "0.25rem",
          marginRight: "1rem",
          boxShadow: state.isFocused ? "0 0 0 2px #3b82f6" : provided.boxShadow,
          borderColor: state.isFocused ? "#3b82f6" : provided.borderColor,
          fontSize: "0.875rem",
          borderRight: "none",
        }),
        singleValue: (provided) => ({
          ...provided,
          display: "flex",
          alignItems: "center",
          fontSize: "0.875rem",
          justifyContent: "flex-start",
          fontWeight: 500,
          letterSpacing: "0.025em",
          marginLeft: 0,
          marginRight: 0,
        }),
        valueContainer: (provided) => ({
          ...provided,
          paddingLeft: "0.5rem",
          paddingRight: "0.25rem",
          justifyContent: "flex-start",
        }),
        option: (provided, state) => ({
          ...provided,
          display: "flex",
          alignItems: "center",
          backgroundColor: state.isSelected
            ? "#3b82f6"
            : state.isFocused
              ? "#e0e7ff"
              : "white",
          color: state.isSelected ? "white" : "#111827",
          fontSize: "0.875rem",
          justifyContent: "flex-start",
          fontWeight: 500,
          letterSpacing: "0.025em",
          paddingLeft: "0.75rem",
        }),
        menu: (provided) => ({
          ...provided,
          zIndex: 20,
          minWidth: 130,
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          padding: "0.25rem",
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
      }}
      formatOptionLabel={(option) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "0.875rem",
            justifyContent: "flex-start",
            width: "100%",
            fontWeight: 500,
            letterSpacing: "0.025em",
          }}
        >
          <span>
            {option.code} {option.value}
          </span>
        </div>
      )}
      aria-label="Seleccionar código de país"
      placeholder="PAÍS"
    />
  );
};
