import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Box,
  createStyles,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { login } from '@/services/userService';
import { useState } from 'react';
import { showNotification } from '@mantine/notifications';
import { IconCircleCheck, IconX } from '@tabler/icons';
import { setToken, setRefreshToken } from '@/services/localStorageService';

const useStyles = createStyles((theme) => ({
  wrapper: {
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

export default function AuthenticationTitle() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      email: '',
      password: null,
      rememberMe: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: string | null) => (value && value.trim() ? null : 'Required password'),
    },
  });

  return (
    <Container size={420} m={'auto'} className={classes.wrapper}>
      <Box
        sx={() => ({
          width: '100%',
        })}
      >
        <Title align="center">Welcome back!</Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form
            onSubmit={form.onSubmit(async (values) => {
              setLoading(true);
              const res = await login({
                username: values.email,
                password: values.password,
              });

              setLoading(false);
              if (res.success) {
                setToken(res.data.access_token);
                setRefreshToken(res.data.refresh_token);
                showNotification({
                  title: 'Success!',
                  message: 'Login successfully',
                  color: 'secondary',
                  icon: <IconCircleCheck />,
                });
                navigate('/');
              } else {
                showNotification({
                  title: res?.data?.code,
                  message: res?.data?.message,
                  color: 'red',
                  icon: <IconX />,
                });
              }
            })}
          >
            <TextInput
              label="Email"
              placeholder="you@mantine.dev"
              withAsterisk
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              withAsterisk
              {...form.getInputProps('password')}
              mt="md"
            />
            <Group position="apart" mt="md">
              <Checkbox
                label="Remember me"
                {...form.getInputProps('rememberMe', { type: 'checkbox' })}
              />
              <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                Forgot password?
              </Anchor>
            </Group>

            <Button fullWidth mt="xl" type="submit" loading={loading}>
              Sign in
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}
