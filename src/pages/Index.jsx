import { Box, Container, Heading, Text, VStack, Image, Button, Link } from "@chakra-ui/react";
import { FaPenFancy, FaComments, FaRobot } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box as="header">
          <Heading as="h1" size="2xl" textAlign="center">
            AI Insights Blog
          </Heading>
          <Text fontSize="xl" mt={2} textAlign="center">
            Dive into the world of Artificial Intelligence
          </Text>
        </Box>

        <Box as="section" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={4}>
            <Heading as="h2" size="lg">
              Latest Posts
            </Heading>
            <Text as="p">Explore the latest trends, innovations, and discussions in the realm of artificial intelligence.</Text>
            <Button rightIcon={<FaPenFancy />} colorScheme="teal">
              Write a Post
            </Button>
          </VStack>
        </Box>

        <Box as="section" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={4}>
            <Heading as="h2" size="lg">
              Community Discussions
            </Heading>
            <Text as="p">Join the conversation with other AI enthusiasts and experts. Share your thoughts and learn from the community.</Text>
            <Button rightIcon={<FaComments />} colorScheme="purple">
              Join Discussions
            </Button>
          </VStack>
        </Box>

        <Box as="section" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={4}>
            <Heading as="h2" size="lg">
              AI Tools & Resources
            </Heading>
            <Text as="p">Discover tools, libraries, and resources to help you build and understand AI technologies.</Text>
            <Button rightIcon={<FaRobot />} colorScheme="orange">
              Explore Tools
            </Button>
          </VStack>
        </Box>

        <Box as="footer" textAlign="center" mt={10}>
          <Text fontSize="sm">© {new Date().getFullYear()} AI Insights Blog. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
