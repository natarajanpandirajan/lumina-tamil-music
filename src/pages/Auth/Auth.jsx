import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AuthForm from '../../components/auth/AuthForm/AuthForm';

export default function Auth() {
  const { mode = 'login' } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/', { replace: true });
  }, [user, navigate]);

  return <AuthForm mode={mode} />;
}
