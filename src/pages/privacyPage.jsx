import { useTranslation } from 'react-i18next';

// ui library
import { Container, Title, Text, Stack, Alert } from '@mantine/core';

// Local imports
import { IconInfoCircle } from '@/components/icon';

// ------------------------------------------------------------------

const PrivacyPage = () => {
  const { t } = useTranslation();
  const sections = t('privacy.sections', { returnObjects: true });

  return (
    <Container size="sm" py="xl">
      <Title order={1} mb="md">{t('privacy.title')}</Title>
      <Alert icon={<IconInfoCircle size={16} stroke={1.5} />} color="yellow" mb="xl">
        {t('legal.draftNotice')}
      </Alert>
      <Text c="dimmed" size="sm" mb="xl">{t('privacy.updated')}</Text>
      <Stack gap="xl">
        {Array.isArray(sections) && sections.map((section, index) => (
          <div key={index}>
            <Title order={3} mb="xs">{section.heading}</Title>
            <Text style={{ whiteSpace: 'pre-line' }}>{section.body}</Text>
          </div>
        ))}
      </Stack>
    </Container>
  );
};

export default PrivacyPage;
