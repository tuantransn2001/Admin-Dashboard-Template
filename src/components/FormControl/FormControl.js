import React from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
const MyFormControl = (props) => {
  const { formData, onSubmit, isLoading, getData } = props;

  const handleGetUser = (fieldName, value) => {
    const key = fieldName;
    getData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return (
    <FormControl>
      {formData.map((fieldData) => {
        return (
          <div key={fieldData.placeholder}>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              {fieldData.label}
            </FormLabel>
            <Input
              onChange={(e) => {
                handleGetUser(fieldData.fieldName, e.target.value);
              }}
              borderRadius="15px"
              mb="24px"
              fontSize="sm"
              type="text"
              placeholder={fieldData.placeholder}
              size="lg"
              color="teal"
            />
          </div>
        );
      })}

      <Button
        fontSize="10px"
        type="submit"
        bg="teal.300"
        w="100%"
        h="45"
        mb="20px"
        color="white"
        mt="20px"
        _hover={{
          bg: "teal.200",
        }}
        _active={{
          bg: "teal.400",
        }}
        isLoading={isLoading}
        onClick={onSubmit}
      >
        SIGN IN
      </Button>
    </FormControl>
  );
};

export default MyFormControl;
