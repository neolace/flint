import { defineRecipe } from "@chakra-ui/react"

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "teal.500",
  },
  variants: {
    ghost: {
      bg: "transparent",
      _hover: {
        bg: "gray.100",
      },
    },
  },
})