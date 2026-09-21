import { useTranslation } from 'react-i18next';

// ui library
import { Container, Title, Text, Stack } from '@mantine/core';

// ------------------------------------------------------------------

const TermsPage = () => {
    const { t } = useTranslation();
    const sections = t('terms.sections', { returnObjects: true });

    return (
        <Container size="sm" py="xl">
            <Title order={1} mb="md">{t('terms.title')}</Title>
            <Text c="dimmed" size="sm" mb="xl">{t('terms.updated')}</Text>
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

export default TermsPage;
