import { memo } from 'react'
import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Grid,
  GridProps,
  GridItem,
} from '@chakra-ui/react'
import { BsWhatsapp } from 'react-icons/bs'
import { ContactList } from './index'

interface ContactProps extends GridProps {
  title: string
  content: string
}

const Contact = ({ title, content, ...props }: ContactProps) => {
  const link =
    'https://api.whatsapp.com/send?phone=+5511966077859&text=Olá! Seja Bem-vindo a nossa Loja de Produtos de Limpeza'

  return (
    <Container maxW={'6xl'}>
      <Grid
        {...props}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(12, 1fr)',
        }}
        gap={5}
        mt={5}
        mb={32}
      >
        <GridItem colSpan={6} p={1} placeSelf={'center'}>
          <Stack justify={'center'} spacing={4}>
            <Heading>{title}</Heading>
            <Text color={'zinc.600'} fontSize={'lg'}>
              {content}
            </Text>
            <Flex py={'1rem'}>
              <Button
                aria-label={'Botão que direciona pro site do WhatsApp'}
                leftIcon={<BsWhatsapp />}
                colorScheme={'teal'}
                variant={'solid'}
                borderRadius={'0.9rem'}
                fontSize={'1.2rem'}
                fontWeight={'semibold'}
                transition={'all 0.6s ease-in-out'}
                _hover={{
                  bg: 'emerald.700',
                  filter: 'brightness(1.6)',
                  transform: 'scale(1.1)',
                }}
                onClick={() => window.open(link)}
              >
                WhatsApp
              </Button>
            </Flex>
          </Stack>
        </GridItem>
        <GridItem colSpan={6} p={1} placeSelf={'center'}>
          <ContactList />
        </GridItem>
      </Grid>
    </Container>
  )
}

export default memo(Contact)
