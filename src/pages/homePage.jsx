import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// ui library
import {
  Container,
  Title,
  Button,
  Text,
  SimpleGrid,
  Card,
  ThemeIcon,
  Group,
  Stack,
  Box,
  Anchor,
  Overlay,
} from '@mantine/core';

// Local imports
import classes from './homePage.module.css';
import {
  IconBook,
  IconLibraryEditor,
  IconDeviceDesktop,
  IconFeather,
  IconBrandGithub,
  IconSwitchHorizontal,
  IconDictionary,
  IconFont,
  IconTools,
} from '@/components/icon';
import {
  LIBRARIES_URL,
  LIBRARY_EDITOR_URL,
  DICTIONARY_URL,
  FONTS_URL,
  TOOLS_URL,
  GITHUB_ORG_URL,
} from '@/config';

// ------------------------------------------------------------------

const HomePage = () => {
  const { t } = useTranslation();

  const products = [
    {
      key: 'library',
      icon: IconBook,
      href: LIBRARIES_URL,
      ctaKey: 'home.products.library.cta',
    },
    {
      key: 'editor',
      icon: IconLibraryEditor,
      href: LIBRARY_EDITOR_URL,
      ctaKey: 'home.products.editor.cta',
    },
    {
      key: 'maktaba',
      icon: IconDeviceDesktop,
      href: '/maktaba',
      ctaKey: 'home.products.maktaba.cta',
      internal: true,
    },
  ];

  const features = [
    { key: 'typography', icon: IconFont },
    { key: 'poetry', icon: IconFeather },
    { key: 'openSource', icon: IconBrandGithub },
    { key: 'localFirst', icon: IconDeviceDesktop },
    { key: 'crossPlatform', icon: IconSwitchHorizontal },
  ];

  const tools = [
    { key: 'fonts', icon: IconFont, href: FONTS_URL },
    { key: 'dictionaries', icon: IconDictionary, href: DICTIONARY_URL },
    { key: 'tools', icon: IconTools, href: TOOLS_URL },
  ];

  return (<>
    {/* Hero */}
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, .7) 100%)"
        opacity={1}
        zIndex={0}
      />
      <Container size="md" className={classes.heroContainer}>
        <Title className={classes.title}>
          {t('home.hero.title')}
        </Title>
        <Text className={classes.subhead} size="xl" mt="md">
          {t('home.hero.subhead')}
        </Text>
        <Group mt="xl" gap="md" className={classes.heroCtas}>
          <Button size="lg" radius="xl" component={Link} to={LIBRARIES_URL}>
            {t('home.hero.browseLibrary')}
          </Button>
          <Button size="lg" radius="xl" variant="default" component={Link} to={LIBRARY_EDITOR_URL}>
            {t('home.hero.tryEditor')}
          </Button>
          <Button size="lg" radius="xl" variant="default" component={Link} to="/maktaba">
            {t('home.hero.getMaktaba')}
          </Button>
        </Group>
      </Container>
    </div>

    {/* Mission */}
    <Container size="sm" py="xl" className={classes.section}>
      <Text ta="center" size="lg" className={classes.mission}>
        {t('home.mission.text')}
      </Text>
      <Text ta="center" mt="md">
        <Anchor href={GITHUB_ORG_URL} target="_blank" rel="noreferrer">
          {t('home.mission.githubLink')}
        </Anchor>
      </Text>
    </Container>

    {/* Three products */}
    <Container size="lg" py="xl" className={classes.section}>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
        {products.map(({ key, icon: Icon, href, ctaKey, internal }) => (
          <Card key={key} withBorder padding="xl" radius="md" className={classes.productCard}>
            <ThemeIcon size={56} radius="md" variant="light">
              <Icon size={30} stroke={1.5} />
            </ThemeIcon>
            <Text fw={600} size="lg" mt="md">
              {t(`home.products.${key}.title`)}
            </Text>
            <Text c="dimmed" size="sm" mt="xs" className={classes.productDescription}>
              {t(`home.products.${key}.description`)}
            </Text>
            <Button
              mt="md"
              fullWidth
              radius="md"
              variant="light"
              component={internal ? Link : 'a'}
              to={internal ? href : undefined}
              href={internal ? undefined : href}
            >
              {t(ctaKey)}
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>

    {/* Feature highlights */}
    <Container size="lg" py="xl" className={classes.section}>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 5 }} spacing="lg">
        {features.map(({ key, icon: Icon }) => (
          <Stack key={key} align="center" ta="center" gap="xs">
            <ThemeIcon size={44} radius="xl" variant="light">
              <Icon size={24} stroke={1.5} />
            </ThemeIcon>
            <Text size="sm">{t(`home.features.${key}`)}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>

    {/* Tools & Resources */}
    <Container size="lg" py="xl" className={classes.section}>
      <Text ta="center" fw={600} size="sm" tt="uppercase" c="dimmed" mb="md">
        {t('home.tools.heading')}
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
        {tools.map(({ key, icon: Icon, href }) => (
          <Anchor key={key} href={href} underline="never" className={classes.toolCard}>
            <Group gap="sm">
              <ThemeIcon size={32} radius="md" variant="light">
                <Icon size={18} stroke={1.5} />
              </ThemeIcon>
              <Box>
                <Text fw={500} size="sm">{t(`home.tools.${key}.title`)}</Text>
                <Text c="dimmed" size="xs">{t(`home.tools.${key}.description`)}</Text>
              </Box>
            </Group>
          </Anchor>
        ))}
      </SimpleGrid>
    </Container>

    {/* Open source / community */}
    <Container size="sm" py="xl" className={classes.communitySection}>
      <Stack align="center" ta="center" gap="sm">
        <IconBrandGithub size={32} stroke={1.5} />
        <Text fw={600}>{t('home.community.heading')}</Text>
        <Text c="dimmed" size="sm">{t('home.community.text')}</Text>
        <Button
          variant="default"
          radius="xl"
          component="a"
          href={GITHUB_ORG_URL}
          target="_blank"
          rel="noreferrer"
          leftSection={<IconBrandGithub size={16} stroke={1.5} />}
        >
          {t('home.community.cta')}
        </Button>
      </Stack>
    </Container>
  </>);
}

export default HomePage;
