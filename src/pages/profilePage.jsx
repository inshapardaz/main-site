import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

// UI Library Imports
import { Avatar, Button, Card, Center, Group, Text } from '@mantine/core';

// Local Imports
import classes from './profilePage.module.css';

//---------------------------------------

const stats = [
    { value: '34', label: 'Reads' },
    { value: '18', label: 'Favorites' },
    { value: '16', label: 'Book Shelves' },
];
const ProfilePage = () => {
    const { t } = useTranslation();
    const user = useSelector(state => state.auth.user);

    if (!user) {
        return null;
    }

    const items = stats.map((stat) => (
        <div key={stat.label}>
            <Text ta="center" fz="lg" fw={500}>
                {stat.value}
            </Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                {stat.label}
            </Text>
        </div>
    ));
    return (
        <Center p="md">
            <Card withBorder padding="xl" radius="md" className={classes.card}>
                <Card.Section
                    h={140}
                />
                <Avatar
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
                    size={80}
                    radius={80}
                    mx="auto"
                    mt={-30}
                    className={classes.avatar}
                />
                <Text ta="center" fz="lg" fw={500} mt="sm">
                    {user.name}
                </Text>
                <Text ta="center" fz="sm" c="dimmed">
                    {user.role}
                </Text>
                <Group mt="md" justify="center" gap={30}>
                    {items}
                </Group>
                <Button fullWidth radius="md" mt="xl" size="md" variant="default">
                    {t('actions.edit')}
                </Button>
            </Card>
        </Center>
    );
}

export default ProfilePage;