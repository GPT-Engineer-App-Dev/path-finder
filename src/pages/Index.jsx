import { Container, Text, VStack, Heading, Box, Button, Image, Flex } from "@chakra-ui/react";
import { FaRoad } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Road Explorer
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover the most amazing roads around the world.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/road.jpg" alt="Scenic Road" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" leftIcon={<FaRoad />}>
          Explore Now
        </Button>
      </VStack>
      <Box width="100%" bgImage="url('/images/background.jpg')" bgSize="cover" bgPosition="center" py={20}>
        <Container centerContent maxW="container.md">
          <VStack spacing={6} color="white">
            <Heading as="h2" size="xl" textAlign="center">
              More Information
            </Heading>
            <Text fontSize="lg" textAlign="center">
              Explore the beauty of the world's most scenic roads. From winding mountain passes to coastal highways, discover routes that offer breathtaking views and unforgettable experiences.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;