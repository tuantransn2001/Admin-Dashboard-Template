import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import MyFormControl from "components/FormControl/FormControl";
// Assets
import signInImage from "assets/img/signInImage.png";
import { useHistory } from "react-router-dom";
import { registerAPI } from "services/api/auth-api";

const SignIn = (props) => {
  const history = useHistory();

  const [userInfo, getUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <Flex position="relative">
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "100vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="48px"
            mt={{ md: "150px", lg: "80px" }}
          >
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Welcome Back
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="14px"
            >
              Enter your email and password to sign in
            </Text>

            <MyFormControl
              formData={[
                {
                  label: "Email",
                  placeholder: "Enter your email",
                  fieldName: "email",
                },
                {
                  label: "Password",
                  placeholder: "Enter your password",
                  fieldName: "password",
                },
              ]}
              isLoading={isLoading}
              getData={getUserInfo}
              onSubmit={() => {
                registerAPI(userInfo, setIsLoading);
              }}
            />

            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Don't have an account?
                <Link
                  onClick={() => {
                    history.replace("/auth/signup");
                  }}
                  as="span"
                  ms="5px"
                  fontWeight="bold"
                >
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100%"
          w="40vw"
          position="absolute"
          right="0px"
        >
          <Box
            bgImage={signInImage}
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
          ></Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SignIn;
