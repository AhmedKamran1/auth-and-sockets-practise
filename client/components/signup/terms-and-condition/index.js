import React from 'react';
import { Box, Divider } from '@mui/material';
import { FlexContainer, Text } from '@/components/UI';

function TermsAndConditions() {
  return (
    <Box>
      <FlexContainer flexDirection={'column'} gap={1}>
        <Text variant="subHeader" textAlign="center">
          Last Updated: 1st Jan 2024
        </Text>
        <Divider
          orientation={'horizontal'}
          sx={{ backgroundColor: 'orange', width: '100%', height: '1px' }}
        />
      </FlexContainer>
      <Box sx={{ mt: 1 }}>
        {/* Section 1 */}
        <Box sx={{ mb: 1 }}>
          <Text variant="header" fontWeight={600}>
            1. About us
          </Text>
        </Box>
        <Box sx={{ mb: 1 }}>
          <Text variant="main" fontWeight={500}>
            1.1 Company details
          </Text>
        </Box>
        <Text variant="body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
      </Box>
      <Box sx={{ mt: 1 }}>
        {/* Section 2 */}
        <Box sx={{ mb: 1 }}>
          <Text variant="header" fontWeight={600}>
            2. Our Services
          </Text>
        </Box>
        <Box sx={{ mb: 1 }}>
          <Text variant="main" fontWeight={500}>
            2.1 Compliance with specification.
          </Text>
        </Box>
        <Text variant="body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
      </Box>
      <Box sx={{ mt: 1 }}>
        {/* Section 3 */}
        <Box sx={{ mb: 1 }}>
          <Text variant="header" fontWeight={600}>
            3. Your obligations
          </Text>
        </Box>
        <Box sx={{ mb: 1 }}>
          <Text variant="main" fontWeight={500}>
            3.1 Complaints
          </Text>
        </Box>
        <Text variant="body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
        <Box sx={{ mb: 1, mt: 1 }}>
          <Text variant="main" fontWeight={500}>
            3.2 Intellectual Property Rights
          </Text>
        </Box>
        <Text variant="body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
      </Box>
    </Box>
  );
}
export default TermsAndConditions;
