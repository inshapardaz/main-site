import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// ui library
import {
  Box,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  Group,
  Stack,
  ThemeIcon,
  List,
  Anchor,
  Overlay,
} from '@mantine/core';

// Local imports
import classes from './maktabaPage.module.css';
import {
  IconDeviceDesktop,
  IconDownload,
  IconBrandGithub,
  IconBook,
  IconSwitchHorizontal,
  IconSearch,
  IconCategory,
} from '@/components/icon';
import { MAKTABA_REPO_URL, MAKTABA_RELEASES_URL } from '@/config';
import maktabaScreenshot from '@/assets/images/maktaba-screenshot.png';

// ------------------------------------------------------------------

const detectPlatform = () => {
  if (typeof navigator === 'undefined') return 'windows';
  const ua = `${navigator.userAgent} ${navigator.platform}`.toLowerCase();
  if (ua.includes('mac')) return 'mac';
  if (ua.includes('linux')) return 'linux';
  return 'windows';
};

const MaktabaPage = () => {
  const { t } = useTranslation();
  const platform = useMemo(detectPlatform, []);

  const platforms = [
    { key: 'windows' },
    { key: 'mac' },
    { key: 'linux' },
  ];

  const features = [
    { key: 'import', icon: IconDownload },
    { key: 'browse', icon: IconSearch },
    { key: 'organise', icon: IconCategory },
    { key: 'tracking', icon: IconBook },
    { key: 'bilingual', icon: IconSwitchHorizontal },
    { key: 'theme', icon: IconDeviceDesktop },
  ];

  const renderDownloadButtons = (size = 'md') => (
    <Group justify="center" gap="sm">
      {platforms.map(({ key }) => (
        <Button
          key={key}
          size={size}
          radius="xl"
          variant={platform === key ? 'filled' : 'default'}
          component="a"
          href={MAKTABA_RELEASES_URL}
          target="_blank"
          rel="noreferrer"
          leftSection={<IconDownload size={16} stroke={1.5} />}
        >
          {t(`maktaba.platforms.${key}`)}
        </Button>
      ))}
    </Group>
  );

  return (<>
    {/* Hero */}
    <div className={classes.hero}>
      <div className={classes.heroBackdrop}>
        <img src={maktabaScreenshot} alt="" className={classes.heroScreenshot} />
      </div>
      <Overlay
        gradient="linear-gradient(180deg, rgba(10, 15, 25, 0.55) 0%, rgba(10, 15, 25, 0.85) 75%)"
        opacity={1}
        zIndex={1}
      />
      <Container size="sm" className={classes.heroContainer}>
        <ThemeIcon size={64} radius="xl" variant="light" mx="auto" mb="md">
          <IconDeviceDesktop size={36} stroke={1.5} />
        </ThemeIcon>
        <Title className={classes.title}>{t('maktaba.hero.title')}</Title>
        <Text size="lg" className={classes.pitch} mt="sm">{t('maktaba.hero.pitch')}</Text>
        <Box mt="xl">
          {renderDownloadButtons('lg')}
        </Box>
      </Container>
    </div>

    {/* Features */}
    <Container size="lg" py="xl" className={classes.section}>
      <Title order={2} ta="center" mb="xl">{t('maktaba.features.heading')}</Title>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing="lg">
        {features.map(({ key, icon: Icon }) => (
          <Stack key={key} gap="xs">
            <ThemeIcon size={40} radius="md" variant="light">
              <Icon size={22} stroke={1.5} />
            </ThemeIcon>
            <Text fw={500} size="sm">{t(`maktaba.features.${key}.title`)}</Text>
            <Text c="dimmed" size="sm">{t(`maktaba.features.${key}.description`)}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>

    {/* Screenshots placeholder */}
    <Container size="lg" py="xl" className={classes.section}>
      <Title order={2} ta="center" mb="xl">{t('maktaba.screenshots.heading')}</Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <div className={classes.screenshotPlaceholder}>
          <Text c="dimmed" size="sm">{t('maktaba.screenshots.library')}</Text>
        </div>
        <div className={classes.screenshotPlaceholder}>
          <Text c="dimmed" size="sm">{t('maktaba.screenshots.urdu')}</Text>
        </div>
      </SimpleGrid>
    </Container>

    {/* System requirements */}
    <Container size="sm" py="xl" className={classes.section}>
      <Title order={2} ta="center" mb="md">{t('maktaba.requirements.heading')}</Title>
      <List spacing="xs" ta="center" center>
        <List.Item>{t('maktaba.requirements.windows')}</List.Item>
        <List.Item>{t('maktaba.requirements.mac')}</List.Item>
        <List.Item>{t('maktaba.requirements.linux')}</List.Item>
      </List>
    </Container>

    {/* Open source note */}
    <Container size="sm" py="xl" className={classes.section}>
      <Stack align="center" ta="center" gap="sm">
        <IconBrandGithub size={28} stroke={1.5} />
        <Text c="dimmed" size="sm">{t('maktaba.openSource.text')}</Text>
        <Group gap="sm">
          <Anchor href={MAKTABA_REPO_URL} target="_blank" rel="noreferrer">
            {t('maktaba.openSource.repo')}
          </Anchor>
          <Text c="dimmed">·</Text>
          <Anchor href={`${MAKTABA_REPO_URL}/releases`} target="_blank" rel="noreferrer">
            {t('maktaba.openSource.changelog')}
          </Anchor>
        </Group>
      </Stack>
    </Container>

    {/* Download again */}
    <Container size="sm" py="xl" className={classes.communitySection}>
      <Stack align="center" ta="center" gap="md">
        <Title order={2}>{t('maktaba.footerCta.heading')}</Title>
        {renderDownloadButtons('lg')}
      </Stack>
    </Container>
  </>);
};

export default MaktabaPage;
