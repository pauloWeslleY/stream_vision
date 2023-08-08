import { Stack, Flex, SimpleGrid, Text, chakra } from '@chakra-ui/react'
import { IconCheck } from '../../IconCheck'

interface BannerPricingLeftProps {
  title: string
  description: string
  label: string
  listService: {
    label: string
  }[]
}

export const BannerPricingLeft = (props: BannerPricingLeftProps) => {
  const { title, description, label, listService } = props

  return (
    <Stack spacing={8} flex={'0.7'}>
      <Flex flexDir={'column'} p={16}>
        <Flex flexDir={'column'} mb={3} color={'zinc.200'}>
          <Text
            as={'h3'}
            fontSize={'3xl'}
            fontWeight={'bold'}
            lineHeight={'tight'}
            mb={1}
          >
            {title}
          </Text>
          <chakra.p fontSize={['sm', 'md']} color={'zinc.300'}>
            {description}
          </chakra.p>
        </Flex>
        <Flex align={'center'} mt={2} mb={5}>
          <Text
            fontFamily={'body'}
            whiteSpace={'nowrap'}
            fontWeight={'semibold'}
            textTransform={'uppercase'}
            color={'indigo.500'}
          >
            {label}
          </Text>
          <Flex
            ml={'15px'}
            w={'full'}
            h={'3px'}
            borderTopWidth={'1px'}
            borderTopColor={'zinc.200'}
          />
        </Flex>
        <SimpleGrid columns={[1, 2, 1, 2]} spacingY={4}>
          {listService.map(props => (
            <IconCheck key={props.label}>{props.label}</IconCheck>
          ))}
        </SimpleGrid>
      </Flex>
    </Stack>
  )
}
