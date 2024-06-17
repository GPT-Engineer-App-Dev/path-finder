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
      <Box width="100%" py={20} bg="gray.50">
        <Container centerContent maxW="container.md">
          <VStack spacing={6}>
            <Heading as="h2" size="xl" textAlign="center">
              Discover More Scenic Routes
            </Heading>
            <Text fontSize="lg" textAlign="center">
              Dive deeper into the beauty of the world's most scenic roads. Whether you're looking for mountain adventures or coastal drives, we've got you covered.
            </Text>
            <Box boxSize="sm">
              <Image src="/images/realistic-road-1.jpg" alt="Scenic Road with Mountains" borderRadius="md" />
            </Box>
            <Box boxSize="sm">
              <Image src="/images/realistic-road-2.jpg" alt="Coastal Highway" borderRadius="md" />
            </Box>
          </VStack>
        </Container>
      </Box>
      <Box width="100%" py={20} bg="white">
        <Container centerContent maxW="container.md">
          <VStack spacing={6}>
            <Heading as="h2" size="xl" textAlign="center">
              Roads on Hills
            </Heading>
            <Text fontSize="lg" textAlign="center">
              Discover the beauty of roads winding through hilly terrains. From lush green hills to stunning sunsets, these roads offer breathtaking views and unforgettable experiences.
            </Text>
            <Box boxSize="sm">
              <Image src="/images/hill-road-1.jpg" alt="Scenic Road on Hill" borderRadius="md" />
            </Box>
            <Box boxSize="sm">
              <Image src="/images/hill-road-2.jpg" alt="Road on Hill with Sunset" borderRadius="md" />
            </Box>
          </VStack>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;