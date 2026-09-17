import { useState } from 'react';
import PropTypes from 'prop-types';
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
  Badge,
  ActionIcon,
} from '@mantine/core';

// Local imports
import classes from './homePage.module.css';
import {
  IconBook,
  IconLibraryEditor,
  IconDownload,
  IconFeather,
  IconBrandGithub,
  IconSwitchHorizontal,
  IconDictionary,
  IconFont,
  IconTools,
  IconArrowRight,
  IconChevronLeft,
  IconChevronRight,
  IconDeviceDesktop,
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
  const [slide, setSlide] = useState(0);

  const products = [
    {
      key: 'library',
      icon: IconBook,
      href: LIBRARIES_URL,
      internal: false,
    },
    {
      key: 'editor',
      icon: IconLibraryEditor,
      href: LIBRARY_EDITOR_URL,
      internal: false,
    },
    {
      key: 'maktaba',
      icon: IconDownload,
      href: '/maktaba',
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

  const activeProduct = products[slide];
  const ActiveIcon = activeProduct.icon;
  const goTo = (index) => setSlide((index + products.length) % products.length);

  return (<>
    {/* Products carousel */}
    <div className={classes.carouselSection}>
      <Container size="lg" className={classes.carouselContainer}>
        <ActionIcon
          variant="default"
          size="xl"
          radius="xl"
          className={classes.carouselNav}
          onClick={() => goTo(slide - 1)}
          aria-label="Previous"
        >
          <IconChevronLeft size={18} stroke={1.5} />
        </ActionIcon>

        <Card withBorder radius="lg" padding="xl" className={classes.carouselCard}>
          <Badge variant="light" color="gray" size="lg" radius="sm" className={classes.carouselBadge}>
            {t(`home.products.${activeProduct.key}.badge`)}
          </Badge>
          <ThemeIcon size={56} radius="md" variant="light" mt="lg">
            <ActiveIcon size={30} stroke={1.5} />
          </ThemeIcon>
          <Title order={2} mt="md">
            {t(`home.products.${activeProduct.key}.title`)}
          </Title>
          <Text c="dimmed" mt="xs" className={classes.carouselDescription}>
            {t(`home.products.${activeProduct.key}.description`)}
          </Text>
          <Button
            mt="lg"
            radius="md"
            component={activeProduct.internal ? Link : 'a'}
            to={activeProduct.internal ? activeProduct.href : undefined}
            href={activeProduct.internal ? undefined : activeProduct.href}
            rightSection={<IconArrowRight size={16} stroke={1.5} />}
          >
            {t(`home.products.${activeProduct.key}.seeCta`)}
          </Button>
        </Card>

        <ActionIcon
          variant="default"
          size="xl"
          radius="xl"
          className={classes.carouselNav}
          onClick={() => goTo(slide + 1)}
          aria-label="Next"
        >
          <IconChevronRight size={18} stroke={1.5} />
        </ActionIcon>
      </Container>

      <Group justify="center" gap="xs" mt="md">
        {products.map(({ key }, index) => (
          <UnstyledDot key={key} active={index === slide} onClick={() => goTo(index)} />
        ))}
      </Group>
    </div>

    {/* Headline */}
    <Container size="md" className={classes.headlineSection}>
      <Title className={classes.headline}>
        {t('home.hero.title')}
      </Title>
      <Text size="lg" c="dimmed" mt="md" className={classes.headlineSubhead}>
        {t('home.hero.subhead')}
      </Text>
      <Group mt="xl" gap="md">
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
      <Text mt="lg">
        <Anchor href={GITHUB_ORG_URL} target="_blank" rel="noreferrer">
          {t('home.mission.githubLink')}
        </Anchor>
      </Text>
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

const UnstyledDot = ({ active, onClick }) => (
  <Box
    component="button"
    onClick={onClick}
    className={active ? `${classes.dot} ${classes.dotActive}` : classes.dot}
    aria-label="Go to slide"
  />
);

UnstyledDot.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default HomePage;
